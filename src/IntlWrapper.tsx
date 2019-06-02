import React, { useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { LANGS } from './constants';
import messagesEn from './translations/en.json';
import messagesRu from './translations/ru.json';

interface MatchParams {
  lang: string;
}

const messages = {
  'en': messagesEn,
  'ru': messagesRu,
};

const IntlWrapper: React.FC<RouteComponentProps<MatchParams>> = ({children, match: {params}}) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (params.lang) {
      setLang(params.lang);
    }
  }, [params]);

  return LANGS.includes(lang) ? (
    <IntlProvider locale={lang} messages={messages[lang]}>
      {children}
    </IntlProvider>
  ) : <Redirect to="/en"/>;
};

export default withRouter(IntlWrapper);