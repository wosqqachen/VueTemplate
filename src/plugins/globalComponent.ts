import { App } from 'vue';
import IconSvg from '@/components/IconSvg/index.vue';
import BcDigitalAnimation from '@/components/BcDigitalAnimation/index.vue';
import BcList from '@/components/BcList/index.vue';
import BcForm from '@/components/BcForm/index.vue';
import BcMultiText from '@/components/BcMultiText/index.vue';
import BcPaction from '@/components/BcPaction/index.vue';
import { createInstance } from '@/utils/mountComponent';

export default {
	install(Vue: App) {
		Vue.component('IconSvg', IconSvg);
		Vue.component('BcDigitalAnimation', BcDigitalAnimation);
		Vue.component('BcList', BcList);
		Vue.component('BcForm', BcForm);
		Vue.component('BcMultiText', BcMultiText);
		Vue.component('BcPaction', BcPaction);
		Vue.config.globalProperties.$bcPaction = createInstance(BcPaction);
	},
};
