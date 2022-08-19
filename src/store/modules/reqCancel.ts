import {
	CREQCANCEL_SET_ACTION,
	REQCANCEL_REMOVE,
	REQCANCEL_REMOVE_ACTION,
	REQCANCEL_SET,
} from './../../utils/Const';
import { IReqCancelState, IRootState } from './../types';
import { Module } from 'vuex';
import type { Canceler } from 'axios';
const MAX_LEN = 10;
const reqCancel: Module<IReqCancelState, IRootState> = {
	namespaced: true,
	state: {
		reqQueue: [],
	},
	mutations: {
		[REQCANCEL_SET](state: IReqCancelState, payload: Canceler): void {
			// 上限10个队列
			if (state.reqQueue.length >= MAX_LEN) {
				state.reqQueue.shift();
			}
			state.reqQueue.push(payload);
		},
		[REQCANCEL_REMOVE](state: IReqCancelState): void {
			state.reqQueue.forEach(reqCancelFn => {
				reqCancelFn && reqCancelFn();
			});
			state.reqQueue = [];
		},
	},
	actions: {
		[CREQCANCEL_SET_ACTION]({ commit }, payload: Canceler): void {
			commit(REQCANCEL_SET, payload);
		},
		[REQCANCEL_REMOVE_ACTION]({ commit }): void {
			commit(REQCANCEL_REMOVE);
		},
	},
};

export default reqCancel;
