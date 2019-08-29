import React, { useEffect, useState } from 'react';
import { Redirect } from '@reach/router';
import { IntlProvider } from 'react-intl';
import { LANGS } from './constants';
import { flattenMessages } from './utils';

type Props = {
  lang?: string;
};

const IntlWrapper: React.FC<Props> = ({children, lang: pathLang}) => {
  const [lang, setLang] = useState(LANGS.en.lang);

  useEffect(() => {
    const langValue = Object.keys(LANGS).find(key => LANGS[key].route === pathLang);
    if (langValue) {
      setLang(langValue);
    }
  }, [pathLang]);

  return LANGS[lang] ? (
    <IntlProvider locale={lang} messages={flattenMessages(LANGS[lang].messages)}>
      {children}
    </IntlProvider>
  ) : <Redirect to={`/${LANGS.en.route}`}/>;
};

export default IntlWrapper;