import React from 'react';
import { Router, Redirect } from '@reach/router';

import App from '../App';
import { LANGS } from '../constants';

const Routes: React.FC = () => (
  <Router>
    <Redirect from="/" to={`/${LANGS.en.lang}`}/>
    <App path="/:lang"/>
  </Router>
);

export default Routes;
