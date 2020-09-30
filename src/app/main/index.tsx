import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Education from '../education';
import Experience from '../experience';
import Langs from '../langs';
import Profile from '../profile';
import Skills from '../skills';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  container: {
    padding: theme.spacing(1, 1, 0, 1),
    '&:last-child': {
      padding: theme.spacing(0, 1, 1, 1),
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={12} className={classes.item}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.item}>
          <Experience />
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.item}>
          <Skills />
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.item}>
          <Education />
          <Langs />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
