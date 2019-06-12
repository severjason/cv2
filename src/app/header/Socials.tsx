import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(6),
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Socials: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid container={true} className={classes.root}>
      Socials
    </Grid>
  );
};

export default Socials;
