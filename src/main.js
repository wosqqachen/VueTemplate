import Vue from 'vue';
import './utils/monitor';
import App from './App.vue';
import router from './router/router';
import store from './store';
import './registerServiceWorker';
import 'nprogress/nprogress.css';
import '@/assets/css/reset.scss';
import { Button, Field } from 'mint-ui';

import globalDirective from './plugins/globalDirective';
import Storage from './utils/Storage';
import { appGetInvoked, appInvoked } from './utils/jsbridge';
import api from './api';

Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

Vue.config.productionTip = false;

Vue.prototype.Storage = Storage;

Vue.prototype.$appInvoked = appInvoked;
Vue.prototype.$appGetInvoked = appGetInvoked;
window.$appInvoked = appInvoked;
window.$appGetInvoked = appGetInvoked;


window.Storage = Storage;

Vue.use(globalDirective);

Vue.prototype.$api = api;

new Vue({
	router,
	store,
	render : h => h(App)
}).$mount('#app');

if (process.env.NODE_ENV === 'development') {
	require('./plugins/vconsole');
}
