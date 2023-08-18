import { createI18n } from 'vue-i18n';
import { Locale } from 'vant';
import { store } from './../store';
import zhCN from './zh-CN.json';
import ftCN from './ft-CN.json';
import enUS from './en-US.json';
// vant
import zhCNv from 'vant/es/locale/lang/zh-CN';
import ftCNv from 'vant/es/locale/lang/zh-CN';
import enUSv from 'vant/es/locale/lang/en-US';

export type Typelanguage = 'en-US' | 'zh-CN';
type MessageSchema = typeof enUS;

const mappingLocale = {
  'zh-CN': zhCNv,
  'en-US': enUSv,
  'ft-CN': ftCNv,
};

export const I18nMessages = {
  'zh-CN': zhCN,
  'ft-CN': ftCN,
  'en-US': enUS,
};
console.log('获取语言', store.state.language.type);
const i18n = createI18n<[MessageSchema], Typelanguage>({
  legacy: false,
  globalInjection: true,
  locale: store.state.language.type,
  fallbackLocale: 'ft-CN',
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
