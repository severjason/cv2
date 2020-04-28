import React from 'react';
import { useTranslation } from 'react-i18next';
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

  const {t, i18n} = useTranslation();

  const classes = useStyles();

  const Icon = LANGS[i18n.language].flagIcon;

  const link = LANGS[i18n.language].nextRoute;

  return (
    <Grid item className={classes.root}>
      <Link to={`/${link}`}>
        <IconButton title={t['langSwitch']}>
          <Icon/>
        </IconButton>
      </Link>
    </Grid>
  );
};

export default LangSwitcher;
