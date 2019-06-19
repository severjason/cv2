import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import { GithubIcon, LinkedinIcon, Facebook } from '../icons';
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

const Socials: React.FC<InjectedIntlProps> = ({intl}) => {

  const classes = useStyles();

  const getSocial = (value: string) => intl.messages[`cv.social.${value}`];

  return (
    <Grid container={true} className={classes.root} justify="center">
      <IconButton target="_blank" title={getSocial('github')} href={data.github} className={classes.button}>
        <GithubIcon/>
      </IconButton>
      <IconButton target="_blank" title={getSocial('linkedIn')} href={data.linkedIn} className={classes.button}>
        <LinkedinIcon/>
      </IconButton>
      <IconButton target="_blank" title={getSocial('facebook')} href={data.facebook} className={classes.button}>
        <Facebook/>
      </IconButton>
    </Grid>
  );
};

export default injectIntl(Socials);
