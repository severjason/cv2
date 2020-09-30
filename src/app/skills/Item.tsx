import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';

import type { SkillListItem, SkillsData } from '../types';
import { ListIcon } from '../shared';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 0,
  },
  title: {
    fontWeight: 600,
  },
  important: {
    fontWeight: 600,
  },
  listItem: {
    padding: 0,
  },
}));

const Item: React.FC<SkillsData> = ({ title, list }) => {
  const classes = useStyles();

  const generateSkill = ({ name, important }: SkillListItem, index: number, length: number) => {
    const skill = `${name}${length < 2 || index === length - 1 ? '.' : ', '}`;
    return important ? (
      <span key={name} className={classes.important}>
        {skill}
      </span>
    ) : (
      skill
    );
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid container alignItems="center">
        <Typography variant="body2" className={classes.title}>
          {title}:
        </Typography>
      </Grid>
      <Grid>
        <List disablePadding>
          {list.map((skills, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListIcon />
              <ListItemText>{skills.map((skill, index) => generateSkill(skill, index, skills.length))}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Item;
