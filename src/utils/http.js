import axios from 'axios';
import { Indicator, Toast } from 'mint-ui';
import GlobalParameters from './config';
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 50000; // 请求的超时时间50秒
axios.defaults.withCredentials = true; // 需要跨域携带认证
let loadingCount = 0;
axios.interceptors.request.use(config => {
	if (config.method.toUpperCase() === 'GET') {
		if (!config.params.cancleLoading) {
			loadingCount++;
			Indicator.open('加载中...');
		}
		delete config.params.cancleLoading;
	} else {
		if (!config.data.cancleLoading) {
			loadingCount++;
			Indicator.open('加载中...');
		}
		delete config.data.cancleLoading;
	}
	return config;
});

axios.interceptors.response.use(
	res => {
		loadingCount--;
		if (loadingCount <= 0) {
			loadingCount = 0;
			Indicator.close();
		}
		if (!res.data.succeed) {
			Toast.info(res.errorMessage, 3);
		}
		return Promise.resolve(res.data);
	},
	error => {
		loadingCount--;
		if (loadingCount <= 0) {
			loadingCount = 0;
			Indicator.close();
		}
		Toast({
			message : '服务器异常!!!',
			duration : 3000
		});
		return Promise.reject(error.message);
	}
);

const http = options => {
	options.headers = options.headers || {};
	options.method = options.method || 'post';
	options.cancleLoading = options.cancleLoading || false;
	if (options.method.toUpperCase() === 'GET') {
		options.params = { ...GlobalParameters, ...(options.data || options.params), cancleLoading : options.cancleLoading };
	} else {
		options.data = { ...GlobalParameters, ...options.data, cancleLoading : options.cancleLoading };
	}
	return axios(options);
};

export default http;
