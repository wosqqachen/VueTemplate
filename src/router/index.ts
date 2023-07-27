import { storageSet } from '@fe-hl/shared';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
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
