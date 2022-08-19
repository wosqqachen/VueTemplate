import BcList from '@/components/BcList/index.vue';
import BcForm from '@/components/BcForm/index.vue';
import BcDigitalAnimation from '@/components/BcDigitalAnimation/index.vue';
import BcPaction from '@/components/BcPaction/index.vue';
import BcMultiText from '@/components/BcMultiText/index.vue';
declare module 'vue' {
	export interface GlobalComponents {
		BcList: typeof BcList;
		BcForm: typeof BcForm;
		BcDigitalAnimation: typeof BcDigitalAnimation;
		BcPaction: typeof BcPaction;
		BcMultiText: typeof BcMultiText;
	}
}
export {};
