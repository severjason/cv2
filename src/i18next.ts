import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en, uk } from './translations';

const { NODE_ENV } = process.env;

const i18nConfig = () => {
  i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    // .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      },
      resources: {
        en: {
          translation: en,
        },
        uk: {
          translation: uk,
        },
      },
      fallbackLng: 'en',
      debug: NODE_ENV === 'development',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
};

export default i18nConfig;
