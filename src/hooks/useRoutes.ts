import router from './../router';
import type { Router } from 'vue-router';

interface Routes {
  router: Router;
  params: {
    [propname: string]: unknown;
  };
}
export const useRoutes = (): Routes => {
  return {
    params: {
      ...router.currentRoute.value.query,
      ...router.currentRoute.value.params,
    },
    router,
  };
};
