import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkIcon from '@material-ui/icons/Work';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { Title } from '../shared';
import Item from './Item';
import { ExperienceItem } from '../interfaces';
import data from '../../data';

const Experience: React.FC<InjectedIntlProps> = ({intl}) => {

  return (
    <Grid container={true}>
      <Title icon={WorkIcon} text={intl.messages['cv.experience.title']}/>
      {data.experience[intl.locale] && data.experience[intl.locale].map((exp: ExperienceItem, index: number) => (
        <Item
          key={`${exp.startDate}-${index}`}
          company={exp.company}
          endDate={exp.endDate}
          startDate={exp.startDate}
          role={exp.role}
        />
      ))}
    </Grid>
  );
};

export default injectIntl(Experience);