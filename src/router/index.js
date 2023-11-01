// 配置路由

import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入路由配置
import routes from './routes'
// 备份push方法
let originPush = VueRouter.prototype.push;
// 然后重写push方法
// 第一个参数告诉原来push方法，你往哪儿跳(传递哪些参数)
VueRouter.prototype.push = function (location, resolve, reject) {
    // 重新封装的逻辑是判断是否传递了有用的成功或者失败的回调函数 如果有 就自动调用原push函数且传递这两个函数当做参数，如果没有，就自动调用原来的push函数且传递空的回调函数当做参数 以达到解决多次执行而报错的问题
    if (resolve && reject) {
        // call可以更改this指向，下面第一个参数this就是将函数的this指向VueRouter的实例 这样才能正确得到组件的信息 否则this是window
        originPush.call(this, location, resolve, reject)

    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
export default new VueRouter({
    // 这里key的名字和value的名字都是routes所以可以省略写法（es6）
    routes,
    // 路由的滚动行为，控制跳转路由以后滚动条可以自动调整
    scrollBehavior(to, from, savedPosition) {
        // 自动跳到最上面
        return { y: 0 };
    },
    mode:'hash',
})
