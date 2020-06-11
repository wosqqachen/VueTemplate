import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user';
import AxiosCancel from './modules/axiosCancel';

Vue.use(Vuex);

export default new Vuex.Store({
	modules : {
		User,
		AxiosCancel
	},
	strict : process.env.NODE_ENV !== 'production'
});
