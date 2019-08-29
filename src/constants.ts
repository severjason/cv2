import messagesEn from './translations/en.json';
import messagesUa from './translations/ua.json';
import { USflag, UAflag } from './app/icons';

interface Langs {
  [key: string]: {
    route: string;
    lang: string;
    nextRoute: string;
    flagIcon: any;
    messages: typeof messagesEn;
  };
}
export const LANGS: Langs = {
  en: {
    route: 'en',
    lang: 'en',
    nextRoute: 'ua',
    flagIcon: USflag,
    messages: messagesEn,
  },
  uk: {
    route: 'ua',
    lang: 'uk',
    nextRoute: 'en',
    flagIcon: UAflag,
    messages: messagesUa,
  }
};

export const DEFAULT_DATE_FORMAT: string = 'DD.MM.YYYY';