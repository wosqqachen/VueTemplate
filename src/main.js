import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import Cookies from "js-cookie";
import ElementUI from "element-ui";

import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
// WebSocket封装方法
import * as socketApi from "./socket/socket1.js";
Vue.prototype.socketApi = socketApi;

Vue.use(axios);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$Cookie = Cookies;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
