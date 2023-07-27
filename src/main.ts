import { createApp } from 'vue';

import { store, key } from './store';
import router from './router';
import App from './App.vue';
import '@/assets/css/index.scss';
import 'vant/lib/index.css';
import './permission';
import i18n from './locales';
import 'virtual:svg-icons-register';
import { queryUrlParams, loadScript } from '@fe-hl/shared';
createApp(App).use(i18n).use(router).use(store, key).mount('#app');
if (queryUrlParams().debugger == 'debugger') {
  loadScript(
    `${location.origin + import.meta.env.VITE_API_BASE_URL}/vconsole.min.js`,
    () => {
      new window['VConsole']();
    },
  );
}
