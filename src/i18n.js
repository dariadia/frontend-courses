import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "meta_title": "I want to be a frontend developer!",
      portfolio: "Tutor's portfolio",
    }
  },
  ru: {
    translation: {
      "meta_title": "Хочу стать фронтенд-разработчиком!",
      portfolio: 'Портфолио преподавателя'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n
