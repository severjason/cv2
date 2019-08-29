import React from 'react';
import Paper from '@material-ui/core/Paper';
import SkillIcon from '@material-ui/icons/Keyboard';
import { useIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

import { Title } from '../shared';
import Item from './Item';
import { SkillsData } from '../types';
import data from '../../data';

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    padding: theme.spacing(2),
  },
}));

const Skills = () => {

  const intl = useIntl();

  const classes = useStyles();

  const skillsData = data[intl.locale] && data[intl.locale].skills;

  return (
    <React.Fragment>
      <Title icon={SkillIcon} text={`${intl.messages['cv.skills.title']}`}/>
      <Paper className={classes.paper}>
        {skillsData && skillsData.map((skill: SkillsData) => (
          <Item key={skill.title} title={skill.title} list={skill.list}/>
        ))}
      </Paper>
    </React.Fragment>
  );
};

export default Skills;