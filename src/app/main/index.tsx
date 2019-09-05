import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Experience from '../experience';
import Skills from '../skills';
import Langs from '../langs';
import Education from '../education';
import Profile from '../profile';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  container: {
    padding: theme.spacing(1, 1, 0, 1),
    '&:last-child': {
      padding: theme.spacing(0, 1, 1, 1)
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 1),
  },
}));

const Main: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container={true} className={classes.container}>
        <Grid item={true} xs={12} sm={12} md={12} className={classes.item}>
          <Profile/>
        </Grid>
        <Grid item={true} xs={12} sm={12} md={7} className={classes.item}>
          <Experience/>
        </Grid>
        <Grid item={true} xs={12} sm={12} md={5} className={classes.item}>
          <Skills/>
          <Education/>
        </Grid>
        <Grid item={true} xs={12} sm={12} md={12} className={classes.item}>
          <Langs/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;