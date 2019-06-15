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

  const social: any = intl.messages['cv.social'];

  return (
    <Grid container={true} className={classes.root} justify="center">
      <IconButton title={social.github} href={data.github} className={classes.button}>
        <GithubIcon/>
      </IconButton>
      <IconButton title={social.linkedIn} href={data.linkedIn} className={classes.button}>
        <LinkedinIcon/>
      </IconButton>
      <IconButton title={social.facebook} href={data.facebook} className={classes.button}>
        <Facebook/>
      </IconButton>
    </Grid>
  );
};

export default injectIntl(Socials);
