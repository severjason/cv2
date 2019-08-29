import React from 'react';
import { useIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { fade, makeStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';

import Info from './Info';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flex: 1,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
  },
  name: {
    paddingBottom: theme.spacing(2),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  divider: {
    backgroundColor: fade(theme.palette.primary.contrastText, .3),
  },
}));

const Titles = () => {

  const intl = useIntl();

  const classes = useStyles();

  const fullName = `${intl.messages['cv.firstName']} ${intl.messages['cv.lastName']}`;

  return (
    <Grid item={true} className={classes.root}>
      <Helmet >
        <title>{`${fullName} | ${intl.messages['cv.title']} (React)`}</title>
        <meta name="description" content={`${fullName} | ${intl.messages['cv.title']} (React)`} />
      </Helmet>
      <Typography variant="h4" className={classes.name}>
        {fullName}
      </Typography>
      <Typography variant="h5" className={classes.title}>
        {intl.messages['cv.title']}
      </Typography>
      <Divider component="hr" className={classes.divider}/>
      <Info/>
    </Grid>
  );
};

export default Titles;
