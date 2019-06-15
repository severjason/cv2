import messagesEn from './translations/en.json';
import messagesUa from './translations/ua.json';

interface Langs {
  [key: string]: {
    lang: string;
    messages: typeof messagesEn;
  };
}
export const LANGS: Langs = {
  en: {
    lang: 'en',
    messages: messagesEn,
  },
  ua: {
    lang: 'ua',
    messages: messagesUa,
  }
};

export const DEFAULT_DATE_FORMAT: string = 'DD.MM.YYYY';