import { InjectionKey, toRaw } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import userModule, { UserInfo } from './user';
import cancelReqModule, { CancelReq } from './cancelReq';
import languageModule, { Language } from './language';
import themeModule, { Theme } from './theme';
import { STORAGE, storageGet, storageSet } from '@fe-hl/shared';

export interface RootState {
  user: UserInfo;
  cancelReq: CancelReq;
  language: Language;
  theme: Theme;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

function createPersistedState(store: Store<RootState>) {
  try {
    const persistedState = storageGet('PERSISTED-VUEX', STORAGE.LOCAL);
    if (persistedState) {
      store.replaceState({
        ...toRaw(store.state),
        ...(persistedState as object),
      });
    }
    store.subscribe((_mutationPayload, state: RootState) => {
      const rootState = JSON.stringify(state, (key, value) => {
        return key === 'cancelReq' ? undefined : value;
      });
      storageSet('PERSISTED-VUEX', JSON.parse(rootState), STORAGE.LOCAL);
    });
  } catch (error) {
    console.log('PersistedState', error);
  }
}

export const store = createStore<RootState>({
  modules: {
    user: userModule,
    cancelReq: cancelReqModule,
    language: languageModule,
    theme: themeModule,
  },
  plugins: [createPersistedState],
});

export function useStore() {
  return baseUseStore(key);
}
