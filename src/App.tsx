import { grey } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import type { RouteComponentProps } from '@reach/router';
import React from 'react';

import Footer from './app/footer';
import Header from './app/header';
import Main from './app/main';
import IntlWrapper from './IntlWrapper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    boxShadow: theme.shadows[2],
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: grey[100],
  },
}));

type Params = {
  lang: string;
}

const App: React.FC<RouteComponentProps<Params>> = ({lang}) => {

  const classes = useStyles();

  return (
    <IntlWrapper lang={lang}>
      <Container className={classes.root}>
        <Header/>
        <Main/>
        <Footer/>
      </Container>
    </IntlWrapper>
  );
};

export default App;
