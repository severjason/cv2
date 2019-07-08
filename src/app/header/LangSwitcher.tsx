import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { LANGS } from '../../constants';
import { UAflag, USflag } from '../icons';

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    right: 0,
    position: 'absolute',
    padding: theme.spacing(0.5),
  },
}));

interface Props extends  InjectedIntlProps {
}

const LangSwitcher: React.FC<Props> = ({intl}) => {

  const classes = useStyles();

  const Icon = intl.locale === LANGS.en.lang ? USflag : UAflag;

  const link = intl.locale === LANGS.en.lang ? LANGS.ua.lang : LANGS.en.lang;

  return (
    <Grid item={true} className={classes.root}>
      <Link to={`/${link}`}>
        <IconButton title={intl.messages['cv.langSwitch']} href="">
          <Icon/>
        </IconButton>
      </Link>
    </Grid>
  );
};

export default injectIntl(LangSwitcher);
