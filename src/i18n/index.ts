import store from '@/store';
import { AutoInjectModule } from '@/utils';
import { createI18n } from 'vue-i18n';

export const I18nMessages = AutoInjectModule(
	require.context('./lang', true, /\.ts$/)
);

const i18n = createI18n({
	// 使用 Composition API 模式，则需要将其设置为false
	legacy: false,
	// 全局注入 $t 函数
	globalInjection: true,
	locale: store.state.lang.lang,
	messages: I18nMessages,
});

export default i18n;
