<template>
	<van-popup position="bottom" :style="{ height: '100%' }" teleport="body" v-model:show="state.dialogVisible" @closed="state.dialogVisible = false" safe-area-inset-top safe-area-inset-bottom transition-appear>
		<van-nav-bar fixed placeholder :title="title || '协议'" left-text="返回" left-arrow @click-left="state.dialogVisible = false" />
		<div :id="id" class="paction"></div>
	</van-popup>
</template>
<script lang="ts">
	import { defineComponent, reactive, watch } from 'vue';
	import { v4 } from 'uuid';
	import axios from 'axios';
	import { Toast } from 'vant';
	import { renderAsync } from 'docx-preview';
	import { BcPactionProps } from '.';

	export default defineComponent({
		name: 'BcPaction',
		props: {
			url: String,
			dialogVisible: Boolean,
			title: String,
			close: Function,
		},
		setup(ctx: any) {
			let id = `${v4()}-agreement`;
			let state = reactive({
				dialogVisible: ctx.dialogVisible,
				url: ctx.url,
			});

			let open = ({ url }: Pick<BcPactionProps, 'url'>) => {
				state.dialogVisible = true;
				state.url = url;
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
								await renderAsync(data, document.getElementById(id) as HTMLElement);
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
