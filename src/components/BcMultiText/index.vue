<template>
	<div class="multi-text" :id="id">
		<slot></slot>
		<span class="more" v-if="isMoreBtn">
			<span v-if="!isExpand">...</span>
			<span class="text-primary" @click="expandEvent()">{{ moreText }}</span>
		</span>
	</div>
</template>
<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';
	import { v4 } from 'uuid';
	export default defineComponent({
		name: 'BcMultiText',
		props: {
			line: {
				type: Number,
				default: 5,
			},
			expandText: {
				type: String,
				default: '展开',
			},
			pickUpText: {
				type: String,
				default: '收起',
			},
			disabledExpand: {
				type: Boolean,
				default: true,
			},
		},
		setup(ctx: any) {
			let id = `${v4()}-multi`;
			let isMoreBtn = ref(false);
			let multiDom: HTMLElement;
			let textLine = ctx.line as number;
			let isExpand = ref(false);
			let maxHeight = '';
			let scrollHeight = 0;
			let moreText = ref(ctx.expandText);
			let pxTovw = num => {
				const vwNum = (num / (750 / 100)).toFixed(3);
				return `${vwNum}vw`;
			};

			let expandEvent = () => {
				if (ctx.disabledExpand) {
					return;
				}
				if (isExpand.value) {
					isExpand.value = false;
					moreText.value = ctx.expandText;
					multiDom.style['max-height'] = maxHeight;
				} else {
					isExpand.value = true;
					moreText.value = ctx.pickUpText;
					multiDom.style['max-height'] = `${scrollHeight}px`;
				}
			};

			onMounted(() => {
				multiDom = document.getElementById(id) as HTMLElement;
				maxHeight = pxTovw(40 * textLine - 2.5);
				multiDom.style['max-height'] = maxHeight;
				scrollHeight = multiDom.scrollHeight;
				isMoreBtn.value = scrollHeight > multiDom.clientHeight;
			});
			return {
				id,
				isMoreBtn,
				expandEvent,
				isExpand,
				moreText,
			};
		},
	});
</script>

<style lang="scss" scoped>
	.multi-text {
		position: relative;
		overflow: hidden;
		font-size: 32px;
		font-weight: normal;
		line-height: 40px;
		letter-spacing: 0px;
		color: rgba(0, 0, 0, 0.6);
		transition: all 0.3s linear;
	}
	.more {
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 32px;
		line-height: 40px;
		background: #fff;
		z-index: 1024;
	}
</style>
