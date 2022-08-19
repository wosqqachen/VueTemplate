<template>
	AboutView
	<icon-svg icon-name="icon-shoucang" w="40" h="40" fill="#f60" />
	<van-button @click="toHome()">Home</van-button>
	<canvas id="canvas"></canvas>
	<van-field v-model="username1" id="foo" label="用户名1" />
	<van-field v-model="username2" id="foo1" label="用户名2" />
	<van-button
		type="primary"
		block
		class="copy_button"
		data-clipboard-target="#foo"
	>
		复制a
	</van-button>
	<van-button
		type="primary"
		block
		class="copy_button"
		data-clipboard-target="#foo1"
	>
		复制b
	</van-button>
</template>
<script lang="ts">
	import { useClipboard, useQrcode } from '@/hooks';
	import router from '@/router';
	import { defineComponent, ref } from 'vue';
	export default defineComponent({
		name: 'AboutView',
		setup() {
			const username1 = ref('');
			const username2 = ref('');
			let toHome = () => {
				router.go(-1);
			};
			useClipboard('.copy_button');
			useQrcode('#canvas', 'https://www.baidu.com');
			return {
				toHome,
				username1,
				username2,
			};
		},
	});
</script>
