import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
import { Indicator, Toast } from 'mint-ui';
import GlobalParameters from './config';
import store from '../store';
import CONST from '@/utils/Const';
axios.defaults.withCredentials = true; // 需要跨域携带认证
class Httprequest {

	constructor () {
		this.timeout = 50000; // 请求的超时时间50秒
		this.queue = {}; // 请求队列,防止重复点击
		this.loadingCount = 0;

	}

	_closeLoading (isLoading) {
		if (isLoading) {
			this.loadingCount--;
			if (this.loadingCount <= 0) {
				Indicator.close();
				this.loadingCount = 0;
			}
		}
	}

	setinterceptors (instance, isLoading, isCancel, unique) {
		instance.interceptors.request.use(config => {
			if (config.method.toUpperCase() === 'GET') {
				config.params = { ...GlobalParameters, ...config.params };
			} else {
				config.data = { ...GlobalParameters, ...config.data };
			}

			if (this.queue[unique]) {
				throw 'EXCEPTION:REPEATCLICK';
			} else {
				this.queue[unique] = unique;
			}

			// if (isLoading){
			// 	this.loadingCount++;
			// 	Indicator.open('加载中...');
			// }
			if (isCancel) {
				config.cancelToken = new axios.CancelToken((cancel) => {
					store.commit('AxiosCancel/' + CONST.AXIOS_ENQUEUE, cancel);
				});
			}

			return config;
		});

		instance.interceptors.response.use(res => {
			delete this.queue[unique];
			this._closeLoading(isLoading);
			if (!res.data.succeed) {
				Toast.info(res.errorMessage, 3);
			}
			return Promise.resolve(res.data);
		},
		error => {
			this._closeLoading(isLoading);
			if (error === 'EXCEPTION:REPEATCLICK') {
				Toast({
					message : '请不要重复点击!!!',
					duration : 3000
				});
			} else if (error.__proto__.constructor.name === 'Cancel') {
				delete this.queue[unique];
				console.log('请求取消');
			} else {
				delete this.queue[unique];
				Toast({
					message : '服务器异常!!!',
					duration : 3000
				});
			}

			return Promise.reject(error.message);
		});
	}

	request (options, { isLoading = true, isCancel = true } = {}) {
		let instance = axios.create();
		options.method || (options.method = 'post');
		let config = {
			baseURL : '/api',
			timeout : this.timeout,
			...options
		};
		// 确定唯一性(路由+接口地址+请求方式)
		const unique = (`${location.href}${config.method}${config.url}`).toLocaleUpperCase();
		this.setinterceptors(instance, isLoading, isCancel, unique);
		return instance(config);
	}

}


const http = new Httprequest;

export default http.request.bind(http);
