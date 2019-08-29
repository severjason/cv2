import React from 'react';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
import { useIntl } from 'react-intl';

import { Title } from '../shared';
import Item from './Item';
import { EducationItem } from '../types';
import data from '../../data';

const Education = () => {

  const intl = useIntl();

  const educationData = data[intl.locale] && data[intl.locale].education;

  return (
    <Grid container={true}>
      <Title icon={SchoolIcon} text={`${intl.messages['cv.education.title']}`}/>
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