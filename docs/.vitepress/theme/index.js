import DefaultTheme from 'vitepress/theme';

import 'vitepress-theme-demoblock/theme/styles/index.css';
import Vant from 'vant';
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';
import 'vant/lib/index.css';
import './index.scss';
export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.use(Vant);
		app.component('Demo', Demo);
		app.component('DemoBlock', DemoBlock);
		app.component('DemoBlock', DemoBlock);
	},
};
