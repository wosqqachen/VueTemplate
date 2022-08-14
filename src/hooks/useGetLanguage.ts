import { I18nMessages } from '@/i18n';
import store from '@/store';
import { computed } from 'vue';

export const useGetLanguage = (key?: string) => {
	// 语言包
	const LanguagePackage = computed(() => {
		if (key) {
			return I18nMessages[store.state.lang.lang][key];
		}
		return I18nMessages[store.state.lang.lang];
	});
	return LanguagePackage;
};
