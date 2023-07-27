import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  Canceler,
  AxiosResponse,
} from 'axios';
import { showLoadingToast, closeToast, showFailToast } from 'vant';
import { refreshToken } from './../apis';

import { store } from './../store';
import { I18nMessages, Typelanguage } from '../locales';

interface Params {
  [key: string]: unknown;
}

interface IAxiosHelper {
  isLoading: boolean;
  isToast: boolean;
  isCancelReq: boolean;
  isDeduplication: boolean;
  reqUniqueKey: string;
}
axios.defaults.headers.common['Content-Type'] =
  'application/json;charset=UTF-8';
class Httprequest {
  private timeout: number;
  private queue: Params;
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
        closeToast();
        this.loadingCount = 0;
      }
    }
  }

  setinterceptors(
    instance: AxiosInstance,
    {
      isLoading,
      isToast,
      isCancelReq,
      isDeduplication,
      reqUniqueKey,
    }: IAxiosHelper,
  ) {
    const { processing, serverException } =
      I18nMessages[store.state.language.type as Typelanguage].http;
    instance.interceptors.request.use((config) => {
      const token: string = store.state.user.token;
      if (config.headers) {
        if (token) {
          config.headers['X-Token'] = token;
        }
      }

      if (isDeduplication) {
        if (this.queue[reqUniqueKey]) {
          throw 'EXCEPTION:REPEATCLICK';
        } else {
          this.queue[reqUniqueKey] = reqUniqueKey;
        }
      }

      if (isLoading) {
        this.loadingCount++;
        showLoadingToast({
          duration: 0,
          forbidClick: true,
          message: 'Loading...',
        });
      }
      if (isCancelReq) {
        config.cancelToken = new axios.CancelToken((cancel: Canceler) => {
          store.dispatch(`cancelReq/enqueue`, cancel);
        });
      }

      return config;
    });

    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        delete this.queue[reqUniqueKey];
        this._closeLoading(isLoading);
        if (Number(res.data.code) === 0) {
          return Promise.resolve(res.data.data);
        } else if (res.data.code === '0200002') {
          console.log('登录过期');
          // 登录过期
          const refreshTokenApi = new Promise<void>((resolve, reject) => {
            // 换取刷新Token
            store.dispatch('user/updateUserInfo', {
              token: store.state.user.refreshToken,
            });
            refreshToken()
              .then((tokenRes) => {
                const token = tokenRes.token;
                if (token) {
                  // 更新用户token&refreshToken
                  store.dispatch('user/updateUserInfo', {
                    token: token,
                    refreshToken: tokenRes.refreshToken,
                  });
                  resolve();
                } else {
                  console.log('重新登录');
                  reject();
                }
              })
              .catch(() => {
                reject();
              });
          });
          return refreshTokenApi.then(() => this.request(res.config));
        }
        if (isToast) {
          showFailToast(res.data.message);
        }
        return Promise.reject(res.data);
      },
      (error) => {
        this._closeLoading(isLoading);
        if (error === 'EXCEPTION:REPEATCLICK') {
          showFailToast(processing);
        } else if (error.__proto__.constructor.name === 'Cancel') {
          delete this.queue[reqUniqueKey];
          console.log('请求取消');
        } else {
          delete this.queue[reqUniqueKey];
          // 请求取消不处理
          if (error.message !== 'canceled') {
            showFailToast(serverException);
          }
        }

        return Promise.reject(error.message || error);
      },
    );
  }
  /**
   *
   * @param {*} axiosConfig axios 参数
   * @param {*} isLoading 开启loading
   * @param {*} isToast 开启接口异常提示
   * @param {*} isCancelReq 取消上一个页面未完成的请求
   * @param {*} isDeduplication 开启接口防重
   * @returns
   */
  request<T>(
    axiosConfig: AxiosRequestConfig,
    {
      isLoading = true,
      isToast = true,
      isCancelReq = true,
      isDeduplication = true,
    }: Partial<IAxiosHelper> = {},
  ): Promise<T> {
    const instance: AxiosInstance = axios.create();
    axiosConfig.method || (axiosConfig.method = 'post');
    const config = {
      baseURL: import.meta.env.VITE_API_HOST,
      timeout: this.timeout,
      ...axiosConfig,
    };
    let reqUniqueKey = '';
    if (isDeduplication) {
      let paramsStr = '';
      if (axiosConfig.method.toLocaleUpperCase() === 'GET') {
        paramsStr = JSON.stringify(config.params || {});
      } else {
        paramsStr = JSON.stringify(config.data || {});
      }
      // 确定唯一性(路由+接口地址+请求方式)
      reqUniqueKey =
        `${location.href}${config.method}${config.url}${paramsStr}`.toLocaleUpperCase();
    }

    this.setinterceptors(instance, {
      isLoading,
      isToast,
      isCancelReq,
      isDeduplication,
      reqUniqueKey,
    });
    return instance(config);
  }
}

const http = new Httprequest();

export const httpGet = <T>(
  url: string,
  params?: Params,
  axiosHelper?: Partial<IAxiosHelper>,
): Promise<T> => {
  return http.request<T>(
    {
      url,
      params,
      method: 'GET',
    },
    axiosHelper,
  );
};
export const httpPost = <T>(
  url: string,
  data?: Params,
  axiosHelper?: Partial<IAxiosHelper>,
): Promise<T> => {
  return http.request<T>(
    {
      url,
      data,
    },
    axiosHelper,
  );
};

export default http.request.bind(http);
