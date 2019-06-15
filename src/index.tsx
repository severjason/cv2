import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_ua from './locale/ua';

import theme from './lib/material-ui/theme';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

// @ts-ignore
addLocaleData([...locale_en, ...locale_ua]);

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'));

serviceWorker.unregister();
