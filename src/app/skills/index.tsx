import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SkillIcon from '@material-ui/icons/Keyboard';
import React from 'react';
import { useTranslation } from 'react-i18next';

import data from '../../data';
import { Title } from '../shared';
import { SkillsData } from '../types';
import Item from './Item';

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    padding: theme.spacing(2),
  },
}));

const Skills = () => {

  const {t, i18n} = useTranslation();

  const classes = useStyles();

  const skillsData = data[i18n.language] && data[i18n.language].skills;

  return (
    <React.Fragment>
      <Title icon={SkillIcon} text={`${t('skills.title')}`}/>
      <Paper className={classes.paper}>
        {skillsData && skillsData.map((skill: SkillsData) => (
          <Item key={skill.title} title={skill.title} list={skill.list}/>
        ))}
      </Paper>
    </React.Fragment>
  );
};

export default Skills;
