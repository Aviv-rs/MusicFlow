import i18next from "i18next";
import enTranslations from "@/locales/en.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources: {
    en: { translation: enTranslations },
  },
});
