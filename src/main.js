import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './registerServiceWorker';
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render : h => h(App)
}).$mount('#app');

if (process.env.NODE_ENV === 'development') {
	require('./plugins/vconsole');
}
