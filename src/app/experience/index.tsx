import Grid from '@material-ui/core/Grid';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react';
import { useTranslation } from 'react-i18next';

import data from '../../data';
import { useLang } from '../../hooks';
import { Title } from '../shared';
import { ExperienceItem } from '../types';
import Item from './Item';

const Experience = () => {
  const { t } = useTranslation();

  const { currentLang } = useLang();

  const expData = data[currentLang] && data[currentLang].experience;

  return (
    <Grid container>
      <Title icon={WorkIcon} text={`${t('experience.title')}`} />
      {expData &&
        expData.map((exp: ExperienceItem, index: number) => (
          <Item
            key={index}
            company={exp.company}
            endDate={exp.endDate}
            startDate={exp.startDate}
            role={exp.role}
            list={exp.list}
            link={exp.link}
            location={exp.location}
          />
        ))}
    </Grid>
  );
};

export default Experience;
