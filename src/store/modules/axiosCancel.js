import CONST from '@/utils/Const';
export default {
	namespaced : true,
	state : {
		queue : []
	},
	mutations : {
		[CONST.AXIOS_ENQUEUE] (state, data) {
			state.queue.push(data);
		},
		[CONST.AXIOS_CLEAR_QUEUE] (state) {
			state.queue.forEach(clearFn => clearFn());
			state.queue = [];
		}
	}
};
