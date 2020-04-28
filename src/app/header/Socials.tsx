import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import { useTranslation } from 'react-i18next';

import data from '../../data';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(6),
    backgroundColor: theme.palette.primary.dark,
  },
  button: {
    margin: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
}));

const Socials = () => {

  const {t} = useTranslation();

  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center">
      <IconButton
        rel="noreferrer noopener"
        target="_blank"
        title={t('social.github')}
        href={data.github}
        className={classes.button}
      >
        <GitHubIcon/>
      </IconButton>
      <IconButton
        rel="noreferrer noopener"
        target="_blank"
        title={t('social.linkedIn')}
        href={data.linkedIn}
        className={classes.button}
      >
        <LinkedInIcon/>
      </IconButton>
      <IconButton
        rel="noreferrer noopener"
        target="_blank"
        title={t('social.facebook')}
        href={data.facebook}
        className={classes.button}
      >
        <FacebookIcon/>
      </IconButton>
    </Grid>
  );
};

export default Socials;
