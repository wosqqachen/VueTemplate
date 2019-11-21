import CONST from '@/utils/Const';
import Storage from '@/utils/Storage';
export default {
	namespaced : true,
	state : {
		user : Storage.get(CONST.USER_INFO) || {}
	},
	getters : {
		user : (state) => {
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
