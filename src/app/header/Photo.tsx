import React  from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { photo } from '../../data';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 250,
    minHeight: 250,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  avatar: {
    width: 200,
    height: 200,
    margin: theme.spacing(1),
  },
}));

const Photo = () => {

  const classes = useStyles();

  return (
    <Grid item={true} className={classes.root}>
      <Avatar className={classes.avatar} component="div" src={photo}/>
    </Grid>
  );
};

export default Photo;
