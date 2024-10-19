import i18n from "i18next";
import { getLocales } from 'expo-localization';
import { initReactI18next } from "react-i18next";

import en from './en.json';
import pt from './pt.json';

const deviceLanguage = getLocales()[0].languageCode;

export const resources = {
  en: { translation: en },
  pt: { translation: pt },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: deviceLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;