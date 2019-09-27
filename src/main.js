import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
import './registerServiceWorker';
import 'nprogress/nprogress.css';
import { Button } from 'mint-ui';
import globalDirective from './plugins/globalDirective';
import Storage from './utils/Storage';

Vue.component(Button.name, Button);

Vue.config.productionTip = false;

Vue.prototype.Storage = Storage;

window.Storage = Storage;

Vue.use(globalDirective);

new Vue({
	router,
	store,
	render : h => h(App)
}).$mount('#app');

if (process.env.NODE_ENV === 'development') {
	require('./plugins/vconsole');
}
