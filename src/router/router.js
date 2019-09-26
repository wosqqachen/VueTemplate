import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

import Home from './../views/Home.vue';

NProgress.inc(0.2);
NProgress.configure({ easing : 'ease', speed : 500, showSpinner : false });

Vue.use(Router);

let router = new Router({
	mode : 'history',
	base : process.env.BASE_URL,
	routes : [
		{
			path : '/',
			name : 'home',
			component : Home
		},
		{
			path : '/about',
			name : 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component : () =>
				import(/* webpackChunkName: "about" */ './../views/About.vue')
		}
	]
});
router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
