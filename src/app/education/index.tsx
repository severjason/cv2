import React from 'react';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
import { useTranslation } from 'react-i18next';

import { Title } from '../shared';
import Item from './Item';
import type { EducationItem } from '../types';
import data from '../../data';

const Education = () => {

  const {t, i18n} = useTranslation();

  const educationData = data[i18n.language] && data[i18n.language].education;

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
