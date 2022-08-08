import { App } from 'vue';
import BcPaction from '@/components/BcPaction/index';
import BcList from '@/components/BcList/index.vue';
import BcForm from '@/components/BcForm/index.vue';
import BcDigitalAnimation from '@/components/BcDigitalAnimation/index.vue';
import IconSvg from '@/components/IconSvg/index.vue';

export default {
	install(Vue: App) {
		Vue.use(BcPaction);
		Vue.component('IconSvg', IconSvg);
		Vue.component('BcDigitalAnimation', BcDigitalAnimation);
		Vue.component('BcList', BcList);
		Vue.component('BcForm', BcForm);
	},
};
