import { Module, ActionContext } from 'vuex';
import {
	USER_INFO_GET,
	USER_INFO_SET,
	USER_INFO_REMOVE,
	USER_INFO_SET_ACTION,
	USER_INFO_REMOVE_ACTION,
} from './../../utils/Const';
import { IUserInfoState, IRootState } from '../types';
import { deepStateCopy, deleteStateKeys } from '@/utils';

const userInfo: Module<IUserInfoState, IRootState> = {
	namespaced: true,
	state: {
		accessToken: '11-22-33',
	},
	getters: {
		[USER_INFO_GET](state: IUserInfoState): IUserInfoState {
			return state;
		},
	},
	mutations: {
		[USER_INFO_SET](state: IUserInfoState, payload: IUserInfoState): void {
			// 直接赋值会失去响应式
			deepStateCopy(state, payload);
		},
		[USER_INFO_REMOVE](state: IUserInfoState): void {
			deleteStateKeys(state);
		},
	},
	actions: {
		[USER_INFO_SET_ACTION](
			{ commit }: ActionContext<IUserInfoState, IRootState>,
			payload: IUserInfoState
		): void {
			commit(USER_INFO_SET, payload);
		},
		[USER_INFO_REMOVE_ACTION]({
			commit,
		}: ActionContext<IUserInfoState, IRootState>): void {
			commit(USER_INFO_REMOVE);
		},
	},
};

export default userInfo;
