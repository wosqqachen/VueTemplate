import axios from 'axios';
import GlobalParameters from './config';
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = '';
axios.defaults.timeout = 5000; // 请求的超时时间5秒
axios.defaults.withCredentials = true; // 需要跨域携带认证

axios.interceptors.response.use(config => {
	return config;
});

axios.interceptors.response.use(res => {
	return Promise.resolve(res.data);
}, error => {
	return Promise.reject(error.message);
});

const http = options => {
	options.headers = options.headers || {};
	options.method = options.method || 'post';
	if (options.method.toUpperCase() === 'GET') {
		options.params = { ...GlobalParameters, ...(options.data || options.params) };
	} else {
		options.data = { ...GlobalParameters, ...options.data };
	}
	return axios(options);
};

export default http;
