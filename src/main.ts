import { createApp } from 'vue';
import i18n from '@/i18n';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store, { key } from './store';
import globalComponent from './plugins/globalComponent';
import 'vant/lib/index.css';
import '@/assets/css/index.scss';
import './permission';
import './utils/jsbridge';
import { loadScript, queryUrlParams } from '@fe-hl/utils';

const UrlParams = queryUrlParams();
const app = createApp(App);

app.use(store, key);
app.use(router);
app.use(i18n);
app.use(globalComponent);
app.mount('#app');
if (UrlParams.debugger === 'debugger') {
	loadScript(`${location.origin + location.pathname}/vconsole.min.js`, () => {
		new window['VConsole']();
	});
}
