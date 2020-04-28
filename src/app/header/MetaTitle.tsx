import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import data, { photo } from '../../data';
import { useLang } from '../../hooks';

const MetaTitle = () => {

  const {t} = useTranslation();

  const {currentLang} = useLang();

  const fullName = `${t('firstName')} ${t('lastName')}`;

  const framework = data.addition ? `(${data.addition})` : '';

  const title = `${fullName} | ${t('title')} ${framework}`;

  const description = data[currentLang].profile;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title}/>
      <meta name="description" content={description}/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content={data.website}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={photo}/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={data.website}/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content={photo}/>
    </Helmet>
  );
};

export default MetaTitle;
