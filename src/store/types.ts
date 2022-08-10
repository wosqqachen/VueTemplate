import type { Canceler } from 'axios';
export interface IUserInfoState {
	accessToken: string;
}

export interface ICommonParamsState {
	platform: string;
}

export interface IReqCancelState {
	reqQueue: Canceler[];
}
export interface IlangState {
	lang: 'zh' | 'en';
}

export interface IRootState {
	userInfo: IUserInfoState;
	commonParams: ICommonParamsState;
	reqCancel: IReqCancelState;
	lang: IlangState;
}
