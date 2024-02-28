import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      meta_title: "I want to be a frontend developer!",
      portfolio: "Tutor's portfolio",
      meta_description: "Daria's React.js & JavaScript learning courses.",
      personalised: "Personalised mentouring course. Below you can check out the general outline of the course program. I adjust the plan individually depending on the goals and level of each student."
    }
  },
  ru: {
    translation: {
      meta_title: "Хочу стать фронтенд-разработчиком!",
      portfolio: 'Портфолио преподавателя',
      meta_description: "Программы обучения React.js и JavaScript от Даши.",
      what_you_get: "Что Вы получите",
      personalised: "Персонализированный курс обучения. Ниже Вы можете ознакомиться с общим планом-программой курса. План я корректирую в зависимости от целей и уровня каждого ученика."
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
