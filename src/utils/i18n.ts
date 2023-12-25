import { createI18n } from "vue-i18n";
import en from "@/locales/en";
import zh from "@/locales/zh";

const LANGUAGE_MAP = new Map([
  ["zh", zh],
  ["en", en]
]);

function buildMessage() {
  const message: any = {};
  LANGUAGE_MAP.forEach((value, key) => {
    message[key] = value;
  });
  return message;
}

const OPTIONS = {
  legacy: false,
  locale: "zh",
  messages: buildMessage()
};
export const i18n = createI18n(OPTIONS);
