import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

const TabBarLayout = () =>
	import(/* webpackChunkName:'tabBarLayout' */ '@/views/TabBarLayout');
const TakeOut = () =>
	import(/* webpackChunkName:'takeOut' */ '@/views/TakeOut');
const Found = () => import(/* webpackChunkName:'found' */ '@/views/Found');
const Mine = () => import(/* webpackChunkName:'mine' */ '@/views/Mine');
const Login = () => import(/* webpackChunkName:'Login' */ '@/views/Login');

NProgress.inc(0.2);
NProgress.configure({ easing : 'ease', speed : 500, showSpinner : false });

Router.prototype.go = function (step = -1) {
	this.isRouterBack = true;
	window.history.go(step);
};
const replace = Router.prototype.replace;
Router.prototype.replace = function () {
	this.isRouterBack = true;
	replace.apply(this, arguments);
};

Vue.use(Router);

let router = new Router({
	base : process.env.BASE_URL,
	routes : [
		{
			path : '/',
			name : 'TabBarLayout',
			component : TabBarLayout,
			children : [
				{
					path : 'takeOut',
					name : 'TakeOut',
					component : TakeOut
				},
				{
					path : 'found',
					name : 'Found',
					component : Found
				},
				{
					path : 'mine',
					name : 'Mine',
					component : Mine
				}
			]
		},
		{
			path : '/login',
			name : 'Login',
			component : Login
		},
		{
			path : '*',
			redirect : '/takeOut'
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
