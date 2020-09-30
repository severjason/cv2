import React from 'react';
import { Router, Redirect } from '@reach/router';

import App from '../App';
import { LANGS } from '../constants';

const Routes = () => (
  <Router>
    <App path="/:lang" />
    <Redirect noThrow from="*" to={`/${LANGS.en.lang}`} />
  </Router>
);

export default Routes;
