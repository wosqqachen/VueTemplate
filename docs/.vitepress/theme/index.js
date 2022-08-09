import DefaultTheme from 'vitepress/theme';

import Vant from 'vant';
import 'vant/lib/index.css';
export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.use(Vant);
	},
};
