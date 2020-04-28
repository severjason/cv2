import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { LangItem } from '../types';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    '&:last-child': {
      marginBottom: 0,
    }
  },
  title: {
    fontWeight: 600,
  },
  level: {
    paddingLeft: theme.spacing(1),
  }
}));

const Item: React.FC<LangItem> = ({title, level}) => {

  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Typography variant="body2" className={classes.title}>
        {title}:
      </Typography>
      <Typography variant="body2" className={classes.level}>
        {level}
      </Typography>
    </Grid>
  );
};

export default Item;
