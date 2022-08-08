import { httpPost, httpGet } from '@/utils/Httprequest';

export const loginApi = data => {
	return httpPost('/login', data);
};

export const getAccountsInfoApi = data => {
	return httpGet('/getAccountsInfo', data);
};

export const getListApi = data => {
	return httpGet('/getList', data, {
		isLoading: false,
	});
};
