import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import AdminRegister from './Components/AdminRegister/AdminRegister';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard-override' component={Dashboard} />
        <Route path='/register' component={AdminRegister} />
    </Switch>
)