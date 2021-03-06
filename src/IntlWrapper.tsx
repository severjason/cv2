import { Redirect } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import { LANGS } from './constants';
import { LangContext } from './context/lang';

type OwnProps = {
  lang?: string;
};

type Props = WithTranslation & OwnProps;

const IntlWrapper: React.FC<Props> = ({ children, lang: pathLang, i18n }) => {
  const [lang, setLang] = useState(LANGS.en.lang);

  useEffect(() => {
    const langValue = Object.keys(LANGS).find(key => LANGS[key].route === pathLang);
    if (langValue) {
      i18n.changeLanguage(langValue).then(() => setLang(langValue));
    }
  }, [pathLang, i18n]);

  return LANGS[lang] ? (
    <LangContext.Provider value={lang}>{children}</LangContext.Provider>
  ) : (
    <Redirect to={`/${LANGS.en.route}`} />
  );
};

export default withTranslation()(IntlWrapper);
