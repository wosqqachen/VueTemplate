<template>
	<div>
		<svg aria-hidden="true" :style="getStyle">
			<use :xlink:href="`#${iconName}`" :fill="fill" />
		</svg>
	</div>
</template>
<script lang="ts">
	import { defineComponent, computed } from 'vue';
	import '@/utils/iconfont.js';
	export default defineComponent({
		name: 'IconSvg',
		props: {
			iconName: {
				type: String,
				required: true,
			},
			w: {
				type: [String, Number],
				default: '40',
			},
			h: {
				type: [String, Number],
				default: '40',
			},
			fill: {
				type: String,
				default: '',
			},
		},
		setup(props) {
			let getStyle = computed(() => {
				let styleMap = {
					width: `${props.w}px`,
					height: `${props.h}px`,
				};
				return styleMap;
			});
			return {
				getStyle,
			};
		},
	});
</script>
