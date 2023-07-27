import { Module } from 'vuex';
import { RootState } from '.';

export interface UserInfo {
  username: string;
  token: string;
  refreshToken: string;
  userId: string;
}

const userInfo = {
  username: '',
  token: '',
  refreshToken: '',
  userId: '',
};

const userModule: Module<UserInfo, RootState> = {
  namespaced: true,
  state: { ...userInfo },
  mutations: {
    update(state, payload: Partial<UserInfo>) {
      Object.assign(state, payload);
    },
    clear(state) {
      Object.assign(state, userInfo);
    },
  },
  actions: {
    updateUserInfo({ commit }, payload: Partial<UserInfo>) {
      commit('update', payload);
    },
    logout({ commit }) {
      commit('clear');
    },
  },
};

export default userModule;
