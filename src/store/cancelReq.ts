import { Module } from 'vuex';
import { RootState } from '.';
import type { Canceler } from 'axios';

export interface CancelReq {
  queue: Canceler[];
}
const MAX_QUEUE = 10;
const cancelReqModule: Module<CancelReq, RootState> = {
  namespaced: true,
  state: {
    queue: [],
  },
  mutations: {
    update(state: CancelReq, payload: Canceler) {
      if (state.queue.length >= MAX_QUEUE) {
        state.queue.shift();
      }
      state.queue.push(payload);
    },
    clear(state: CancelReq) {
      state.queue.forEach((reqCancel) => {
        reqCancel && reqCancel();
      });
      state.queue = [];
    },
  },
  actions: {
    enqueue({ commit }, payload: Canceler) {
      commit('update', payload);
    },
    clearQueue({ commit }) {
      commit('clear');
    },
  },
};

export default cancelReqModule;
