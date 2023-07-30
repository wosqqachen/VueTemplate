import { storageSet } from '@fe-hl/shared';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('../views/Login/index.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    meta: { title: '首页', requireAuth: true },
    component: () => import('../views/Home/index.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    meta: { title: 'Demo' },
    component: () => import('../views/Demo/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

const routerGo = router.go;
router.go = (...args) => {
  storageSet('BACK', 'BACK');
  routerGo.apply(this, args);
};

export default router;
