import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import './global.css';
import Header from './app/header';
import Footer from './app/footer';
import Main from './app/main';
import IntlWrapper from './IntlWrapper';
import { grey } from '@material-ui/core/colors';

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

type Props = {
  path?: string;
  lang?: string;
};

const App: React.FC<Props> = ({lang}) => {

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
