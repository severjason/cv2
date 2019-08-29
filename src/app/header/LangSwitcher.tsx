import React from 'react';
import { useIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';

import { LANGS } from '../../constants';

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    right: 0,
    position: 'absolute',
    padding: theme.spacing(0.5),
  },
}));

const LangSwitcher = () => {

  const intl = useIntl();

  const classes = useStyles();

  const Icon = LANGS[intl.locale].flagIcon;

  const link = LANGS[intl.locale].nextRoute;

  return (
    <Grid item={true} className={classes.root}>
      <Link to={`/${link}`}>
        <IconButton title={`${intl.messages['cv.langSwitch']}`}>
          <Icon/>
        </IconButton>
      </Link>
    </Grid>
  );
};

export default LangSwitcher;
