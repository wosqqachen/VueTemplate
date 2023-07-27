import { UserInfo } from '../store/user';
import { httpGet, httpPost } from '../utils/Httprequest';

export const loginApi = (data: {
  phone: string;
  code: string;
}): Promise<UserInfo> => {
  return httpPost('/user/login', data);
};

export const userApi = () => {
  return httpGet('/user/list');
};

// 刷新Token
export const refreshToken = (): Promise<{
  token: string;
  refreshToken: string;
}> => {
  return httpGet(
    '/user/refresh',
    {},
    {
      isLoading: false,
      isToast: false,
      isCancelReq: false,
      isDeduplication: false,
    },
  );
};
