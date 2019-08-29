import React from 'react';
import { useIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(6),
    backgroundColor: theme.palette.primary.dark,
  },
  text: {
    color: theme.palette.primary.contrastText,
  }
}));

const Footer = () => {

  const intl = useIntl();

  const classes = useStyles();

  const fullName = `${intl.messages['cv.firstName']} ${intl.messages['cv.lastName']}`;

  return (
    <Grid container={true} className={classes.root} justify="center" alignItems="center">
      <Typography className={classes.text}>
        {`${fullName} @ ${new Date().getFullYear()}`}
      </Typography>
    </Grid>
  );
};

export default Footer;
