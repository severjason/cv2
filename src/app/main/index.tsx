import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Experience from '../experience';
import Skills from '../skills';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 500,
    backgroundColor: theme.palette.primary.contrastText
  },
  container: {
    padding: theme.spacing(1),
  },
  item: {
    padding: theme.spacing(1),
  },
}));

const Main: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container={true} className={classes.container}>
        <Grid item={true} xs={12} sm={7} className={classes.item}>
          <Experience/>
        </Grid>
        <Grid item={true} xs={12} sm={5} className={classes.item}>
          <Skills/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;