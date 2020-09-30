import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import { USflag, UAflag } from './app/icons';

type Langs = {
  [key: string]: {
    route: string;
    lang: string;
    nextRoute: string;
    flagIcon: OverridableComponent<SvgIconTypeMap>;
  };
};
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
  },
};
