import http from '@/utils/Httprequest';

export default {
	login (data) {
		return http({
			url : '/login',
			data
		});
	},
	userInfo (params) {
		return http({
			url : '/userInfo',
			method : 'get',
			params
		});
	}
};
