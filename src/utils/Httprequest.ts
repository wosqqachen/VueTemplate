import { CREQCANCEL_SET_ACTION, USER_INFO_REMOVE_ACTION } from './Const';
import axios from 'axios';
import type {
	AxiosInstance,
	AxiosRequestConfig,
	Canceler,
	AxiosResponse,
} from 'axios';
axios.defaults.headers.common['Content-Type'] =
	'application/json;charset=UTF-8';
import { Toast, Dialog } from 'vant';
import store from '@/store';
import router from '@/router';
axios.defaults.withCredentials = true; // 需要跨域携带认证

interface IAxiosHelper {
	isLoading: boolean;
	isCancel: boolean;
	isToast: boolean;
	isRepeatedRequests: boolean;
	unique: string;
}
class Httprequest {
	private timeout: number;
	private queue: object;
	private loadingCount: number;
	constructor() {
		this.timeout = 50000; // 请求的超时时间50秒
		this.queue = {}; // 请求队列,防止重复点击
		this.loadingCount = 0;
	}

	_closeLoading(isLoading: boolean) {
		if (isLoading) {
			this.loadingCount--;
			if (this.loadingCount <= 0) {
				Toast.clear();
				this.loadingCount = 0;
			}
		}
	}

	setinterceptors(
		instance: AxiosInstance,
		{ isLoading, isCancel, unique, isToast, isRepeatedRequests }: IAxiosHelper
	) {
		instance.interceptors.request.use((config: AxiosRequestConfig) => {
			const accessToken: string = store.state.userInfo.accessToken;
			if (config.headers) {
				config.headers['lang'] = store.state.lang.lang;
				if (accessToken) {
					config.headers['Authorization'] = 'Bearer ' + accessToken;
				}
			}

			const commonParams = store.getters[`commonParams/COMMON_PARAMS_GET`];
			if (config.method?.toUpperCase() === 'GET') {
				config.params = { ...commonParams, ...config.params };
			} else {
				if (
					config.headers &&
					config.headers['Content-Type'] === 'multipart/form-data'
				) {
					Object.keys(commonParams).forEach(key => {
						config.data.append(key, commonParams[key]);
					});
				} else {
					config.data = { ...commonParams, ...config.data };
				}
			}
			if (isRepeatedRequests) {
				if (this.queue[unique]) {
					throw 'EXCEPTION:REPEATCLICK';
				} else {
					this.queue[unique] = unique;
				}
			}

			if (isLoading) {
				this.loadingCount++;
				Toast.loading({
					duration: 0,
					message: '加载中...',
					forbidClick: true,
				});
			}
			if (isCancel) {
				config.cancelToken = new axios.CancelToken((cancel: Canceler) => {
					store.dispatch(`reqCancel/${CREQCANCEL_SET_ACTION}`, cancel);
				});
			}

			return config;
		});

		instance.interceptors.response.use(
			(res: AxiosResponse) => {
				delete this.queue[unique];
				this._closeLoading(isLoading);
				if (res.data.code == 200) {
					return Promise.resolve(res.data);
				}
				if (isToast) {
					Toast.fail(res.data.msg);
				}
				return Promise.reject(res.data);
			},
			error => {
				this._closeLoading(isLoading);
				if (error === 'EXCEPTION:REPEATCLICK') {
					Toast.fail('正在处理中，请吴重复点击');
				} else if (error.__proto__.constructor.name === 'Cancel') {
					delete this.queue[unique];
					console.log('请求取消');
				} else if (error.response && error.response.status === 401) {
					store.dispatch(`userInfo/${USER_INFO_REMOVE_ACTION}`);
					Dialog({
						title: '提示',
						message: '登录过期,请重新登录',
					}).then(() => {
						router.replace('/#/login');
					});
				} else {
					delete this.queue[unique];
					// 请求取消不处理
					if (error.message !== 'canceled') {
						Toast.fail('WEB-服务器异常');
					}
				}

				return Promise.reject(error.message || error);
			}
		);
	}

	/**
	 *
	 * @param {*} axiosConfig axios 参数
	 * @param {*} isLoading 请求开启loading
	 * @param {*} isCancel 是否开启请求中断
	 * @param {*} isToast 是否接口异常自动提示
	 * @param {*} isRepeatedRequests 是否允许重复请求
	 * @returns
	 */
	request(
		axiosConfig: AxiosRequestConfig,
		{
			isLoading = true,
			isCancel = true,
			isToast = true,
			isRepeatedRequests = true,
		}: Partial<IAxiosHelper> = {}
	) {
		const instance: AxiosInstance = axios.create();
		axiosConfig.method || (axiosConfig.method = 'post');
		const config = {
			baseURL: process.env.NODE_ENV === 'development' ? '/api' : '/api',
			timeout: this.timeout,
			...axiosConfig,
		};
		let unique = '';
		if (isRepeatedRequests) {
			let paramsStr = '';
			if (axiosConfig.method.toLocaleUpperCase() === 'GET') {
				paramsStr = JSON.stringify(config.params || {});
			} else {
				paramsStr = JSON.stringify(config.data || {});
			}
			// 确定唯一性(路由+接口地址+请求方式)
			unique =
				`${location.href}${config.method}${config.url}${paramsStr}`.toLocaleUpperCase();
		}

		this.setinterceptors(instance, {
			isLoading,
			isCancel,
			unique,
			isToast,
			isRepeatedRequests,
		});
		return instance(config);
	}
}

const http = new Httprequest();

export const httpGet = (
	url: string,
	params?: object,
	axiosHelper?: Partial<IAxiosHelper>
) => {
	return http.request(
		{
			url,
			params,
			method: 'GET',
		},
		axiosHelper
	);
};
export const httpPost = (
	url: string,
	data?: object,
	axiosHelper?: Partial<IAxiosHelper>
) => {
	return http.request(
		{
			url,
			data,
		},
		axiosHelper
	);
};

export default http.request.bind(http);
