import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Login from './Components/Login/Login';
import Pins from './Components/Pins/Pins.js';

export default (
    <Switch>
        <Route path='/login' render={() => <Login />} />
        <Route path='/home' render={() => <Pins />} />
        <Route component={Login} />

    </Switch>
)