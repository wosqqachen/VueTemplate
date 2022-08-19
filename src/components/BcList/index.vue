<template>
	<van-pull-refresh
		v-model="refreshing"
		@refresh="onLoad({ isResetPageNumber: true })"
	>
		<van-list
			v-model:loading="loading"
			v-model:error="error"
			:finished="finished"
			:finished-text="finishedText"
			@load="onLoad"
		>
			<template v-for="row in list">
				<slot name="data" :row="row"></slot>
			</template>
			<template #error>
				<slot name="network">
					<van-empty :image="networkImage" :description="networkTip" />
				</slot>
			</template>
			<template #finished v-if="list.length === 0">
				<slot name="empty">
					<van-empty :image="emptyImage" :description="emptyTip" />
				</slot>
			</template>
		</van-list>
	</van-pull-refresh>
</template>
<script lang="ts">
	import { defineComponent, ref, reactive } from 'vue';
	export default defineComponent({
		name: 'BcList',
		props: {
			// 查询接口
			reqApiMethod: {
				type: Function,
				required: true,
			},
			// 查询条件
			queryParams: {
				type: Object,
				default() {
					return {};
				},
			},
			// 格式化接口入参
			requestHandler: {
				type: Function,
				default(params = {}) {
					return params;
				},
			},
			// 格式化数据接口返回的数据
			responseHandler: {
				type: Function,
				default(res) {
					return res;
				},
			},
			// 是否分页
			hasPage: {
				type: Boolean,
				default: true,
			},
			// 每页展示条数
			pageSize: {
				type: Number,
				default: 10,
			},
			// 网络异常
			networkTip: {
				type: String,
				default: '网络异常',
			},
			// 网络异常展位图
			networkImage: {
				type: String,
				default: 'network',
			},
			// 暂无数据
			emptyTip: {
				type: String,
				default: '暂无数据',
			},
			// 暂无数据占位图
			emptyImage: {
				type: String,
				default: '',
			},
			// 数据加载完底部tip
			finishedText: {
				type: String,
				default: '没有更多了',
			},
		},
		setup(ctx: any) {
			let listConfig = reactive({
				pageNumber: 1, // 当前的页数
				pageSize: ctx.pageSize, // 每页展示条数
			});
			const list: any = ref([]); // 列表数据
			const refreshing = ref(false); // 下啦刷新是否加载中
			const loading = ref(false); // 加载更多是否加载中
			const finished = ref(false); // 数据是否全部加载完毕
			const error = ref(false);

			// 获取列表数据
			const onLoad = ({ isResetPageNumber = false } = {}) => {
				return new Promise<void>(resolve => {
					error.value = false;
					// 刷新重置页数
					if (isResetPageNumber) {
						listConfig.pageNumber = 1;
						loading.value = true;
						finished.value = false;
						refreshing.value = false;
						// 重置数据
						list.value = [];
					}
					// 过滤空数据
					let queryParams = {};
					Object.keys(ctx.queryParams).forEach(key => {
						if (
							ctx.queryParams[key] !== '' &&
							ctx.queryParams[key] !== 'null' &&
							ctx.queryParams[key] !== 'undefined' &&
							ctx.queryParams[key] !== null &&
							ctx.queryParams[key] !== undefined
						) {
							queryParams[key] = ctx.queryParams[key];
						}
					});
					// 入参处理
					let queryForm = ctx.requestHandler({
						pageNumber: listConfig.pageNumber,
						pageSize: ctx.pageSize,
						...queryParams,
					});
					// 是否分页
					if (!ctx.hasPage) {
						delete queryForm.pageNumber;
						delete queryForm.pageSize;
					}
					ctx
						.reqApiMethod(queryForm)
						.then((res: any) => {
							resolve();
							let rows = ctx.responseHandler(res.data.rows);
							list.value.push(...rows);
							listConfig.pageNumber++;
							loading.value = false;
							if (list.value.length >= res.data.total) {
								finished.value = true;
							}
						})
						.catch(err => {
							if (err !== 'EXCEPTION:REPEATCLICK') {
								resolve();
								error.value = true;
								loading.value = false;
							}
						});
				});
			};

			return {
				listConfig,
				list,
				onLoad,
				loading,
				finished,
				refreshing,
				error,
			};
		},
	});
</script>
<style lang="scss" scoped></style>
