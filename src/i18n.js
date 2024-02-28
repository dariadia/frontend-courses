import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  ru: {
    translation: {
      "Welcome to React": "Добро пожаловать react-i18next"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n
