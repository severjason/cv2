import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, SvgIconTypeMap } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

type OwnProps = {
  icon: OverridableComponent<SvgIconTypeMap>;
  text: string;
};

const Title: React.FC<OwnProps> = ({ icon, text }) => {
  const classes = useStyles();

  const Icon = icon;

  return (
    <Grid container={true} className={classes.root} alignItems="center">
      <Icon color="primary" className={classes.icon} />
      <Typography color="primary" variant="h5">
        {text}
      </Typography>
    </Grid>
  );
};

export default Title;
