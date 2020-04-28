import React from 'react';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
import { useTranslation } from 'react-i18next';
import { useLang } from '../../hooks';

import { Title } from '../shared';
import Item from './Item';
import type { EducationItem } from '../types';
import data from '../../data';

const Education = () => {

  const {t} = useTranslation();

  const {currentLang} = useLang();

  const educationData = data[currentLang] && data[currentLang].education;

  return (
    <Grid container>
      <Title icon={SchoolIcon} text={`${t('education.title')}`}/>
      {educationData && educationData.map((exp: EducationItem, index: number) => (
        <Item
          key={index}
          company={exp.company}
          endDate={exp.endDate}
          startDate={exp.startDate}
          role={exp.role}
          addition={exp.addition}
        />
      ))}
    </Grid>
  );
};

export default Education;
