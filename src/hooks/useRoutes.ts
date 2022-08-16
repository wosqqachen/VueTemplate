import router from '@/router';
import type { Router } from 'vue-router';
interface IRoutes {
	params: any;
	router: Router;
}
export const useRoutes = (): IRoutes => {
	return {
		params: {
			...router.currentRoute.value.query,
			...router.currentRoute.value.params,
		},
		router,
	};
};
