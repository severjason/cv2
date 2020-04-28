import { useContext } from 'react';
import { LangContext } from '../context/lang';

function useLang() {
  return {
    currentLang: useContext(LangContext)
  };
}

export default useLang;
