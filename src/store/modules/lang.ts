import { Module, ActionContext } from 'vuex';
import { LANG_GET, LANG_SET, LANG_SET_ACTION } from './../../utils/Const';

import { IRootState, IlangState } from '../types';

const lang: Module<IlangState, IRootState> = {
	namespaced: true,
	state: {
		lang: 'zh',
	},
	getters: {
		[LANG_GET](state: IlangState): string {
			return state.lang;
		},
	},
	mutations: {
		[LANG_SET](state: IlangState, payload: string): void {
			state.lang = payload;
		},
	},
	actions: {
		[LANG_SET_ACTION]({ commit }: ActionContext<IlangState, IRootState>, payload: string): void {
			commit(LANG_SET, payload);
		},
	},
};

export default lang;