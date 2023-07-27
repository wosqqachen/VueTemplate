import { Module } from 'vuex';
import { RootState, store } from '.';

export interface Theme {
  mode: string;
}
const match = matchMedia('(prefers-color-scheme: dark)');
function followOs() {
  let payload;
  if (match.matches) {
    payload = 'dark';
  } else {
    payload = 'light';
  }
  store.commit('theme/update', payload);
  window.document.documentElement.setAttribute('data-theme', payload);
}
const themeModule: Module<Theme, RootState> = {
  namespaced: true,
  state: {
    mode: 'light',
  },
  mutations: {
    update(state, payload: string) {
      state.mode = payload;
    },
  },

  actions: {
    update({ commit }, payload: string) {
      if (payload === 'system') {
        if (match.matches) {
          payload = 'dark';
        } else {
          payload = 'light';
        }
        match.addEventListener('change', followOs);
      } else {
        match.removeEventListener('change', followOs);
      }
      commit('update', payload);
      window.document.documentElement.setAttribute('data-theme', payload);
    },
  },
};

export default themeModule;
