<template>
	<van-button type="primary" @click="handler(1)" class="mr-1">
		打开协议方式一
	</van-button>
	<van-button type="success" @click="handler(2)">打开协议方式二</van-button>
	<bc-paction ref="bcPaction"></bc-paction>
</template>
<script lang="ts">
	import { defineComponent, getCurrentInstance } from 'vue';

	export default defineComponent({
		name: 'ExampleAgreement',
		setup() {
			let Instance: any = getCurrentInstance()?.proxy;
			let handler = type => {
				let rootUrl = location.origin + location.pathname;
				if (type == 1) {
					Instance.$bcPaction({ url: rootUrl + 'ccb.docx' });
				} else {
					Instance.$refs['bcPaction'].open({ url: rootUrl + 'ccb.docx' });
				}
			};

			return {
				handler,
			};
		},
	});
</script>
