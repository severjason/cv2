import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

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

  const {t} = useTranslation();

  const classes = useStyles();

  const fullName = `${t('firstName')} ${t('lastName')}`;

  return (
    <Grid container className={classes.root} justify="center" alignItems="center">
      <Typography className={classes.text}>
        {`${fullName} @ ${new Date().getFullYear()}`}
      </Typography>
    </Grid>
  );
};

export default Footer;
