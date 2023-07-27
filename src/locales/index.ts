import { createI18n } from 'vue-i18n';
import { Locale } from 'vant';
import { store } from './../store';
import zhCN from './zh-CN.json';
import enUS from './en-US.json';
// vant
import zhCNv from 'vant/es/locale/lang/zh-CN';
import enUSv from 'vant/es/locale/lang/en-US';

export type Typelanguage = 'en-US' | 'zh-CN';
type MessageSchema = typeof enUS;

const mappingLocale = {
  'zh-CN': zhCNv,
  'en-US': enUSv,
};

export const I18nMessages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

const i18n = createI18n<[MessageSchema], Typelanguage>({
  legacy: false,
  globalInjection: true,
  locale: store.state.language.type,
  fallbackLocale: 'zh-CN',
  messages: I18nMessages,
});
Locale.use(
  store.state.language.type,
  mappingLocale[store.state.language.type as Typelanguage],
);

export const setLanguage = (lang: Typelanguage) => {
  store.dispatch('language/update', lang);
  Locale.use(lang, mappingLocale[lang]);
};

export default i18n;
