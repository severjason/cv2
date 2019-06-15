import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from '../App';
import { LANGS } from '../constants';

const Routes: React.FC = () => (
    <Switch>
        <Route exact={true} path="/" render={() => <Redirect to={`/${LANGS.en.lang}`}/>}/>
        <Route exact={true} path="/:lang" component={App}/>
    </Switch>
);

export default Routes;
