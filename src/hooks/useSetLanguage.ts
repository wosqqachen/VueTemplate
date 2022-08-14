import { Locale } from 'vant';
import store from '@/store';
import { LANG_SET_ACTION } from '@/utils/Const';
import zh from 'vant/es/locale/lang/zh-CN';
import en from 'vant/es/locale/lang/en-US';
const mapLang = {
	zh: {
		key: 'zh-CN',
		value: zh,
	},
	en: {
		key: 'en-US',
		value: en,
	},
};
export const useSetLanguage = (proxy, langType: 'zh' | 'en') => {
	proxy.$i18n.locale = langType;
	store.dispatch(`lang/${LANG_SET_ACTION}`, langType);
	Locale.use(mapLang[langType].key, mapLang[langType].value);
};
