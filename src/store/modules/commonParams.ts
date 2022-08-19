import {
	COMMON_PARAMS_GET,
	COMMON_PARAMS_SET,
	COMMON_PARAMS_SET_ACTION,
} from './../../utils/Const';

import { Module, ActionContext } from 'vuex';
import { IRootState, ICommonParamsState } from './../types';

const commonParams: Module<ICommonParamsState, IRootState> = {
	namespaced: true,
	state: {
		platform: 'H5',
	},
	getters: {
		[COMMON_PARAMS_GET](state: ICommonParamsState): ICommonParamsState {
			return state;
		},
	},
	mutations: {
		[COMMON_PARAMS_SET](
			state: ICommonParamsState,
			payload: ICommonParamsState
		): void {
			state = payload;
		},
	},
	actions: {
		[COMMON_PARAMS_SET_ACTION](
			{ commit }: ActionContext<ICommonParamsState, IRootState>,
			payload: ICommonParamsState
		): void {
			commit(COMMON_PARAMS_SET, payload);
		},
	},
};

export default commonParams;
