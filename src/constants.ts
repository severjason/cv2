import { USflag, UAflag } from './app/icons';

type Langs = {
  [key: string]: {
    route: string;
    lang: string;
    nextRoute: string;
    flagIcon: any;
  };
}
export const LANGS: Langs = {
  en: {
    route: 'en',
    lang: 'en',
    nextRoute: 'ua',
    flagIcon: USflag,
  },
  uk: {
    route: 'ua',
    lang: 'uk',
    nextRoute: 'en',
    flagIcon: UAflag,
  }
};
