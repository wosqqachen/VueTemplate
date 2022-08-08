import http from '@/utils/Httprequest';

export const uploadApi = data => {
	return http({
		method: 'post',
		url: '/upload',
		headers: {
			'Content-Type': 'multipart/form-data',
		},
		data,
	});
};

export const getWxConfigApi = data => {
	return http({
		method: 'post',
		url: '/getWxConfig',
		data,
	});
};
