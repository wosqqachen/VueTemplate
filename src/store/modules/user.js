import CONST from '@/utils/Const';
export default {
	namespaced : true,
	state : {
		user : {
			username : 'hl'
		}
	},
	getters : {
		user : (state) => {
			if (Storage.isObjectEmpty(state.user)) {
				state.user = Storage.get(CONST.USER_INFO) || {};
			}
			return state.user;
		}
	},
	mutations : {
		[CONST.SET_USER] (state, data) {
			state.user = data;
			Storage.set(CONST.USER_INFO, data);
		}
	},
	actions : {
		userAction ({ commit }, item) {
			commit(CONST.SET_USER, item);
		}
	}
};
