import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LangIcon from '@material-ui/icons/Language';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

import { Title } from '../shared';
import Item from './Item';
import { LangItem } from '../interfaces';
import data from '../../data';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Langs: React.FC<InjectedIntlProps> = ({intl}) => {

  const classes = useStyles();

  const langData = data[intl.locale] && data[intl.locale].langs;

  return (
    <Grid container={true}>
      <Title icon={LangIcon} text={intl.messages['cv.langs.title']}/>
      <Paper className={classes.paper}>
        {langData && langData.map((lang: LangItem) => (
          <Item
            key={lang.title}
            title={lang.title}
            level={lang.level}
          />
        ))}
      </Paper>
    </Grid>
  );
};

export default injectIntl(Langs);