import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// WebSocket封装方法
import * as socketApi from './socket/socket1.js'
Vue.prototype.socketApi = socketApi

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$Cookie = Cookies
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
