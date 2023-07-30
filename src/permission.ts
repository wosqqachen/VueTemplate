import NProgress from 'nprogress';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import router from './router';
import { store } from './store';

NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

// 页面强制刷新,剔除请求队列
store.dispatch('cancelReq/clearQueue');
router.beforeEach(
  (
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    store.dispatch('cancelReq/clearQueue');
    NProgress.start();
    document.title = (to.meta?.title as string) || 'H5';
    // 不需要验证登录
    if (!to.meta?.requireAuth) {
      next();
    } else if (!store.state.user.token) {
      //未登录
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    } else {
      // 登录
      next();
    }
  },
);

router.afterEach(() => {
  NProgress.done();
});
