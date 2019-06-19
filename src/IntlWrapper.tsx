import React, { useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { LANGS } from './constants';
import { flattenMessages } from './utils';

interface MatchParams {
  lang: string;
}

const IntlWrapper: React.FC<RouteComponentProps<MatchParams>> = ({children, match: {params}}) => {
  const [lang, setLang] = useState(LANGS.en.lang);

  useEffect(() => {
    if (params.lang) {
      setLang(params.lang);
    }
  }, [params]);
  return LANGS[lang] ? (
    <IntlProvider locale={lang} messages={flattenMessages(LANGS[lang].messages)}>
      {children}
    </IntlProvider>
  ) : <Redirect to={`/${LANGS.en.lang}`}/>;
};

export default withRouter(IntlWrapper);