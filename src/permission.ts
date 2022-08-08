import { REQCANCEL_REMOVE_ACTION } from './utils/Const';
import NProgress from 'nprogress';
import router from '@/router';
import store from '@/store';
NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
const whiteList: string[] = ['/login', '/register'];
// 页面强制刷新,剔除请求队列
store.dispatch(`reqCancel/${REQCANCEL_REMOVE_ACTION}`);
router.beforeEach((to: any, from: any, next: any) => {
	store.dispatch(`reqCancel/${REQCANCEL_REMOVE_ACTION}`);
	NProgress.start();
	document.title = (to.meta && to.meta.title) || 'Donut';
	if (whiteList.some(v => v === to.path)) {
		// 白名单放行
		next();
	} else if (!store.state.userInfo.accessToken) {
		//未登录
		next(`/login?redirect=${to.path}`);
		NProgress.done();
	} else {
		// 登录
		next();
	}
});

router.afterEach(() => {
	NProgress.done();
});
