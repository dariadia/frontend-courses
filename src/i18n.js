import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      meta_title: "I want to be a frontend developer!",
      portfolio: "Tutor's portfolio",
      meta_description: "Daria's React.js & JavaScript learning courses.",
      personalised: "Personalised mentouring course. Below you can check out the general outline of the course program. I adjust the plan individually depending on the goals and level of each student.",
       react_base: "For beginners",
       react_adv: "Advanced",
       react_base_1: "Introductory lesson. Getting to know each other.",
       react_base_1_details: "We define learning objectives, assess the current student level of knowledge (*). An introductory lecture about React, what a library is and how it differs from a framework. What is the difference between state and props. Idempotent functions.",
       react_base_3: "Hooks.",
       react_base_3_details: "Let's get acquainted with hooks in React: useState, useEffect. What they are for, how they work, how to use them in pairs.",
       react_base_2: "JavaScript (fetch, async)*",
       react_base_2_details: "It is useful to repeat before studying the useEffect hook. How fetch works, how you can receive data through the API, configuration and requests, asynchronous functions. *The presence of this lesson in the program is discussed personally with the student.",
       react_base_4: "Hooks.",
       react_base_4_details: "Continuing to explore hooks. useReducer, useContext, useEventEffect, useRef.",
       react_base_5: "Hooks.",
       react_base_5_details: "Continuing to study hooks. useMemo, useCallback, useReducer.",
       react_base_6: "How to write hooks yourself.",
       react_base_6_details: "How and why they are needed.",
       react_base_7: "HOC + Routing.",
       react_base_7_details: "What are higher-order functions, what are they for. An introductory lesson on React Router.",
       react_base_8: "React Router",
       react_base_8_details: "Types of routers: which one should I use for my application? Pros and cons in the project. Optional Next.js + what is SSR",
       react_base_9: "Data types in JavaScript + TypeScript*",
       react_base_9_details: "Lesson at the request of the student. What data types are there in JavaScript, for example, did you know that typeof NaN (not a number) === 'number'? ",
       react_adv_1: "Introductory lesson. Getting to know each other.",
       react_adv_1_details: "We define learning goals, assess the current level of knowledge (*).",
    }
  },
  ru: {
    translation: {
      meta_title: "Хочу стать фронтенд-разработчиком!",
      portfolio: 'Портфолио преподавателя',
      meta_description: "Программы обучения React.js и JavaScript от Даши.",
      what_you_get: "Что Вы получите",
      personalised: "Персонализированный курс обучения. Ниже Вы можете ознакомиться с общим планом-программой курса. План я корректирую в зависимости от целей и уровня каждого ученика.",
      react_base: "Для новичков",
      react_adv: "Продвинутый уровень",
      react_base_1: "Вводное занятие. Знакомство.",
      react_base_1_details: "Определяем цели обучения, оценка текущего уровня знаний (*). Вводная лекция про React, что такое библиотека и чем она отличается от фреймворка. В чём отличие state от props. Идемпотентные функции.",
      react_base_3: "Хуки.",
      react_base_3_details: "Знакомимся с hook-ами в React: useState, useEffect. Для чего нужны, как работают, как использовать в паре.",
      react_base_2: "JavaScript (fetch, async)*",
      react_base_2_details: "Полезно повторить перед изучением хука useEffect. Как работает fetch, как можно получать данные через API, настройка и запросов, асинхронные функции. *Наличие этого урока в программе обсуждается лично со студентом.",
      react_base_4: "Хуки.",
      react_base_4_details: "Продолжаем изучать хуки. useReducer, useContext, useEventEffect, useRef.",
      react_base_5: "Хуки.",
      react_base_5_details: "Продолжаем изучать хуки. useMemo, useCallback, useReducer.",
      react_base_6: "Как самому писать хуки.",
      react_base_6_details: "Как и для чего они нужны.",
      react_base_7: "HOC + Routing.",
      react_base_7_details: "Что такое функции высшего порядка, для чего они нужны. Вводный урок по React Router.",
      react_base_8: "React Router",
      react_base_8_details: "Виды роутеров: какой использовать для моего приложения? Плюсы и минусы в проекте. Опционально Next.js + что такое SSR",
      react_base_9: "Типы данных в JavaScript + TypeScript*",
      react_base_9_details: "Урок по желанию студента. Какие типы данных есть в JavaScript, например, а вы знали, что typeof NaN (not a number) === 'number'? ",
      react_adv_1: "Вводное занятие. Знакомство.",
      react_adv_1_details: "Определяем цели обучения, оценка текущего уровня знаний (*).",
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
