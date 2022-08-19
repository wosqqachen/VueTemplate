<template>
	<van-popup
		position="bottom"
		:style="{ height: '100%' }"
		@closed="animateEnd()"
		v-model:show="state.dialogVisible"
		safe-area-inset-top
		safe-area-inset-bottom
		transition-appear
		close-on-popstate
	>
		<van-nav-bar
			fixed
			placeholder
			:title="state.title || '协议'"
			left-text="返回"
			left-arrow
			@click-left="state.dialogVisible = false"
		/>
		<div :id="id" class="paction"></div>
	</van-popup>
</template>
<script lang="ts">
	import { defineComponent, reactive, watch } from 'vue';
	import { v4 } from 'uuid';
	import axios from 'axios';
	import { Toast } from 'vant';
	import { renderAsync } from 'docx-preview';

	export default defineComponent({
		name: 'BcPaction',
		props: {
			url: String,
			dialogVisible: Boolean,
			title: String,
			close: Function,
			animateEndcallcak: Function,
		},
		setup(ctx: any) {
			let id = `${v4()}-agreement`;
			let state = reactive({
				dialogVisible: ctx.dialogVisible,
				url: ctx.url,
				title: ctx.title,
			});

			let open = ({ url, title }) => {
				state.dialogVisible = true;
				state.url = url;
				state.title = title;
			};

			let animateEnd = () => {
				ctx.animateEndcallcak && ctx.animateEndcallcak();
				ctx.close && ctx.close();
			};

			watch(
				() => state.dialogVisible,
				() => {
					if (state.dialogVisible) {
						Toast.loading({
							duration: 0,
							message: '协议加载中...',
							forbidClick: true,
						});
						axios({
							method: 'get',
							responseType: 'blob',
							url: state.url,
						})
							.then(async ({ data }) => {
								Toast.clear();
								await renderAsync(
									data,
									document.getElementById(id) as HTMLElement
								);
							})
							.catch(() => {
								Toast.clear();
								Toast.fail('协议加载失败');
							});
					}
				},
				{
					immediate: true,
				}
			);

			return {
				open,
				id,
				state,
				animateEnd,
			};
		},
	});
</script>
<style lang="scss">
	.paction {
		overflow: hidden;
		.docx-wrapper {
			background: #fff !important;
		}
		.docx {
			width: auto !important;
			padding: 0 !important;
		}
		.docx-wrapper > section.docx {
			box-shadow: none !important;
		}
		p {
			line-height: 40px;
		}
	}
</style>
