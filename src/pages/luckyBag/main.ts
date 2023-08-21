import { createApp } from "vue";
import App from "./App.vue";
import "@/utils/rem";
import "@/global";
import index from "@/components/common/index.js";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import zh from "./locales/zh";
import en from "./locales/en";
const messages = {
  zh,
  en
};
const i18n = createI18n({
  legacy: false,
  locale: localStorage.language || "zh",
  messages: messages
});

if (process.env.VUE_APP_CURRENTMODE !== "prod") {
  // 非生产环境
  const VConsole = require("vconsole");
  new VConsole();
}
const app = createApp(App);
app.use(i18n);
app.use(index);
app.use(createPinia());
app.mount("#app");
