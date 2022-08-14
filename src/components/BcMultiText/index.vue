<template>
	<div class="multi-text-flex">
		<div class="multi-text-wrap" :id="id" :style="{ '-webkit-line-clamp': lineClamp }">
			<div class="multi-text-btn" v-if="isMoreBtn" @click="toggleHandler()">{{ toggleText }}</div>
			<div class="multi-text-content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';
	import { v4 } from 'uuid';
	export default defineComponent({
		name: 'BcMultiText',
		props: {
			clamp: {
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
			isExpand: {
				type: Boolean,
				default: false,
			},
			onToggle: {
				type: Function,
			},
		},
		setup(ctx) {
			let id = `${v4()}-multi`;
			let isMoreBtn = ref(false);
			let multiDom: HTMLElement;
			let lineClamp = ref(ctx.clamp);
			let toggleText = ref(ctx.expandText);
			let isToggle = false;
			let scrollHeight = 0;
			let clientHeight = 0;

			let toggleHandler = () => {
				ctx.onToggle && ctx.onToggle();
				if (!ctx.isExpand) return;
				isToggle = !isToggle;
				let h = 0;
				if (isToggle) {
					h = scrollHeight;
					lineClamp.value = 9999;
					toggleText.value = ctx.pickUpText;
				} else {
					h = clientHeight;
					lineClamp.value = ctx.clamp;
					toggleText.value = ctx.expandText;
				}
				multiDom.style['height'] = `${h}px`;
			};

			onMounted(() => {
				multiDom = document.getElementById(id) as HTMLElement;
				multiDom.style['height'] = `${multiDom.clientHeight}px`;
				scrollHeight = multiDom.scrollHeight;
				clientHeight = multiDom.clientHeight;
				isMoreBtn.value = scrollHeight > clientHeight;
				if (isMoreBtn.value) {
					toggleText.value = ctx.expandText;
				}
			});
			return {
				lineClamp,
				toggleHandler,
				isMoreBtn,
				toggleText,
				id,
			};
		},
	});
</script>
<style lang="scss">
	.multi-text- {
		&flex {
			display: flex;
		}
		&wrap {
			display: -webkit-box;
			overflow: hidden;
			-webkit-box-orient: vertical;
			transition: all 0.3s linear;
			&:before {
				content: '';
				float: right;
				height: 100%;
				margin-bottom: -36px;
			}
		}
		&btn {
			float: right;
			clear: both;
		}
	}
	.multi-text-content {
		font-size: 32px;
		line-height: 40px;
		color: rgba(0, 0, 0, 0.6);
	}
	.multi-text-btn {
		position: relative;
		z-index: 1025;
		color: $primary-color;
		font-size: 32px;
	}
</style>
