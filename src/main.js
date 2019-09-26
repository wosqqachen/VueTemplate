import Vue from 'vue';
import App from './App.vue';

import router from './router/router';
import store from './store';
import './registerServiceWorker';

import { Button } from 'mint-ui';
import globalDirective from './plugins/globalDirective';

Vue.component(Button.name, Button);

Vue.config.productionTip = false;

Vue.use(globalDirective);

new Vue({
	router,
	store,
	render : h => h(App)
}).$mount('#app');

if (process.env.NODE_ENV === 'development') {
	require('./plugins/vconsole');
}
