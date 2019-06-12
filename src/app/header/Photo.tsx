import React  from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 250,
    minHeight: 250,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // dev
    border: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Photo: React.FC<{}> = () => {

  const classes = useStyles();

  return (
    <Grid item={true} className={classes.root}>
      <Avatar />
    </Grid>
  );
};

export default Photo;
