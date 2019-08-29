import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from './lib/material-ui/theme';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Routes/>
    </CssBaseline>
  </MuiThemeProvider>
), document.getElementById('root'));

serviceWorker.register();
