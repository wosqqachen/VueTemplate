<template>
	<count-to
		:start-val="Number(start)"
		:end-val="Number(endVal)"
		:duration="Number(duration)"
		:decimals="Number(decimals)"
		:suffix="suffix"
	></count-to>
</template>
<script lang="ts">
	import { defineComponent, ref, watch } from 'vue';
	import CountTo from '../CountTo/index.vue';
	export default defineComponent({
		name: 'BcDigitalAnimation',
		components: {
			CountTo,
		},
		props: {
			startVal: {
				type: [String, Number],
				default: 0,
			},
			endVal: {
				type: [String, Number],
				default: 0,
			},
			duration: {
				type: [String, Number],
				default: 1000,
			},
			decimals: {
				type: [String, Number],
				default: 2,
			},
			suffix: {
				type: String,
				default: '',
			},
		},
		setup(ctx) {
			let start = ref(ctx.startVal);
			watch(
				() => ctx.endVal,
				(newVal, oldVal) => {
					start.value = oldVal;
				}
			);
			return {
				start,
			};
		},
	});
</script>
