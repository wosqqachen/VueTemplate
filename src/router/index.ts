import { BACK } from '@/utils/Const';
import { storageSet } from '@fe-hl/utils';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () =>
			import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue'),
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { left: 0, top: 0 };
	},
});

// 路由返回，回退动画
const routerGo = router.go;
router.go = (...args) => {
	storageSet(BACK, BACK);
	routerGo.apply(this, args);
};

export default router;
