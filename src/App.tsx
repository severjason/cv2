import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import './global.css';
import Header from './app/header';
import Footer from './app/footer';
import Main from './app/main';
import IntlWrapper from './IntlWrapper';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[2],
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const App: React.FC<{}> = () => {

  const classes = useStyles();

  return (
    <IntlWrapper>
      <Container className={classes.root}>
        <Header/>
        <Main/>
        <Footer/>
      </Container>
    </IntlWrapper>
  );
};

export default App;
