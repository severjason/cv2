import React from 'react';
import './App.css';
import IntlWrapper from './IntlWrapper';
import Container from '@material-ui/core/Container';
import Header from './app/header';

const App: React.FC<{}> = () => (
  <IntlWrapper>
    <Container>
      <Header/>
    </Container>
  </IntlWrapper>
);

export default App;
