import { defineConfig } from 'vitepress';
import path from 'path';
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = () => {
	return process.argv[process.argv.length - 1] === 'build';
};
export default defineConfig({
	outDir: resolve('../../document'),
	base: IS_PROD() ? '/vue3-vant4-template/document/' : '/',
	title: '业务组件文档',
	description: '业务组件文档',
	head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'images/logo.svg' }]],
	lastUpdated: true,
	markdown: {
		theme: 'material-palenight',
		lineNumbers: false,
		config: md => {
			const { demoBlockPlugin } = require('vitepress-theme-demoblock');
			md.use(demoBlockPlugin, {
				cssPreprocessor: 'scss',
			});
		},
	},
	themeConfig: {
		lastUpdatedText: '上次更新',
		editLink: {
			pattern: 'https://gitee.com/javaweb-h5/vue3-vant4-template',
			text: '在GitHub上编辑此页',
		},
		logo: 'images/logo.svg',
		nav: [
			{ text: '主页', link: '/' },
			{ text: '指南', link: '/pages/guide' },
			{ text: '更新日志', link: '/pages/updateLog' },
		],

		socialLinks: [{ icon: 'github', link: 'https://gitee.com/javaweb-h5/vue3-vant4-template' }],
		sidebar: [
			{
				collapsible: true,
				items: [
					{
						text: '开发指南',
						link: '/pages/guide',
					},
				],
			},
			{
				text: '业务组件',
				collapsible: true,
				items: [
					{
						text: '表单组件',
						link: '/pages/bcForm',
					},
					{
						text: ' 分页组件',
						link: '/pages/bcList',
					},
					{
						text: ' 金额组件',
						link: '/pages/bcDigitalAnimation',
					},
					{
						text: ' 协议组件',
						link: '/pages/bcPaction',
					},
				],
			},
			{
				text: 'hooks',
				collapsible: true,
				items: [
					{
						text: '路由',
						link: '/pages/useRoutes',
					},
					{
						text: 'dialog弹框',
						link: '/pages/useDialog',
					},
					{
						text: '文本复制',
						link: '/pages/useClipboard',
					},
					{
						text: '生成二维码',
						link: '/pages/useQrcode',
					},
					{
						text: '倒计时',
						link: '/pages/useCountDown',
					},
				],
			},
		],
	},
});
