import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SkillIcon from '@material-ui/icons/Keyboard';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

import { Title } from '../shared';
import Item from './Item';
import { SkillsData } from '../interfaces';
import data from '../../data';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Skills: React.FC<InjectedIntlProps> = ({intl}) => {

  const classes = useStyles();

  const skillsData = data[intl.locale] && data[intl.locale].skills;

  return (
    <Grid container={true}>
      <Title icon={SkillIcon} text={intl.messages['cv.skills.title']}/>
      <Paper className={classes.paper}>
        {skillsData && skillsData.map((skill: SkillsData) => (
          <Item
            key={skill.title}
            title={skill.title}
            list={skill.list}
          />
        ))}
      </Paper>
    </Grid>
  );
};

export default injectIntl(Skills);