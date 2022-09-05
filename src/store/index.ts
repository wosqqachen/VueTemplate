import { InjectionKey } from 'vue';
import {
	createStore,
	useStore as baseUseStore,
	Store,
	createLogger,
} from 'vuex';
import { IRootState } from './types';
import { VUEX_STATE } from '@/utils/Const';
import { AutoInjectModule } from '@/utils';
import { storageGet, storageSet } from '@fe-hl/utils';

export const key: InjectionKey<Store<IRootState>> = Symbol();

function customPlugin(store) {
	const local = storageGet(VUEX_STATE);
	if (local) {
		store.replaceState(local);
	}
	store.subscribe((mutation, state) => {
		storageSet(VUEX_STATE, state);
	});
}

// 自动注入modules
export default createStore<IRootState>({
	modules: AutoInjectModule(require.context('./modules', true, /\.ts$/)),
	plugins: [createLogger(), customPlugin],
	strict: true,
	devtools: process.env.NODE_ENV !== 'production',
});

export function useStore() {
	return baseUseStore(key);
}
