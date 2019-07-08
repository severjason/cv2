import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { LangItem } from '../interfaces';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 600,
  },
  level: {
    paddingLeft: theme.spacing(1),
  }
}));

interface Props extends LangItem {
}

const Item: React.FC<Props> = ({title, level}) => {

  const classes = useStyles();

  return (
    <Grid container={true} alignItems="center">
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