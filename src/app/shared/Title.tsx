import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
  icon: {
    paddingRight: theme.spacing(2),
  },
  text: {
  },
}));

interface OwnProps {
  icon: any;
  text: string;
}

const Title: React.FC<OwnProps> = ({icon, text}) => {

  const classes = useStyles();

  const Icon = icon;

  return (
    <Grid container={true} className={classes.root} alignItems="center" >
      <Icon color="primary" className={classes.icon}/>
      <Typography color="primary" variant="h5" className={classes.text}>
        {text}
      </Typography>
    </Grid>
  );
};

export default Title;
