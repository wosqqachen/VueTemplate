<template>
	<router-link to="/about">About</router-link>
	{{ $t('upload') }}
	<van-button @click="changeLang('zh')">切换中文</van-button>
	<van-button @click="changeLang('en')">语言英文</van-button>
	<bc-multi-text :disabledExpand="false">
		You have yourYou have youYou have youYou havYou have yourYou have youYou
		have youYou have youYou have youYou have youYou have youYou have youYou have
		youYou have youYou have youYou have youYou have you Donut community. Now
		paaagggg Donut ces11
	</bc-multi-text>

	<van-tabs v-model:active="active">
		<van-tab title="表单组件"></van-tab>
		<van-tab title="分页列表组件"></van-tab>
		<van-tab title="协议组件"></van-tab>
	</van-tabs>

	<example-form v-if="active == 0"></example-form>
	<example-list v-else-if="active == 1"></example-list>
	<example-paction v-else></example-paction>
</template>

<script lang="ts">
	import { defineComponent, ref, getCurrentInstance } from 'vue';
	import ExampleList from './components/ExampleList.vue';
	import ExampleForm from './components/ExampleForm.vue';
	import ExamplePaction from './components/ExamplePaction.vue';
	import { useDialog } from '@/hooks';
	import { useSetLanguage } from '@/hooks';
	export default defineComponent({
		name: 'HomeView',
		components: {
			ExampleList,
			ExampleForm,
			ExamplePaction,
		},
		setup() {
			const { proxy } = getCurrentInstance() as any;

			const active = ref(0);
			const changeLang = lang => {
				useDialog({
					title:
						'如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
					showCancelButton: true,
					confirm: () => {
						return new Promise((resolve, reason) => {
							setTimeout(() => {
								reason();
							}, 5000);
						});
					},
				});
				useSetLanguage(proxy, lang);
			};
			return {
				active,
				changeLang,
			};
		},
	});
</script>
