import { createContext } from 'react';
import { LANGS } from '../constants';

export const LangContext =  createContext(LANGS.en.lang);
