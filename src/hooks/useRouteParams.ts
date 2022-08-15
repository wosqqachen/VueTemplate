import router from '@/router';

export const useRouteParams = () => {
	return {
		...router.currentRoute.value.query,
		...router.currentRoute.value.params,
	};
};
