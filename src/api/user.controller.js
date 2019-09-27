import http from '@/utils/http';

export default {
	login (data) {
		return http({
			url : '/login',
			data
		});
	},
	userInfo (data) {
		return http({
			url : '/userInfo',
			method : 'get',
			data
		});
	}
};
