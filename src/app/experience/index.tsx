import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkIcon from '@material-ui/icons/Work';
import { useIntl } from 'react-intl';

import { Title } from '../shared';
import Item from './Item';
import { ExperienceItem } from '../types';
import data from '../../data';

const Experience = () => {

  const intl = useIntl();

  const expData = data[intl.locale] && data[intl.locale].experience;

  return (
    <Grid container={true}>
      <Title icon={WorkIcon} text={`${intl.messages['cv.experience.title']}`}/>
      {expData && expData.map((exp: ExperienceItem, index: number) => (
        <Item
          key={index}
          company={exp.company}
          endDate={exp.endDate}
          startDate={exp.startDate}
          role={exp.role}
          list={exp.list}
          link={exp.link}
        />
      ))}
    </Grid>
  );
};

export default Experience;