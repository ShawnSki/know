import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Signup from './Components/Register/Signup';
import Account from './Components/Account/Account';
import Login from './Components/Register/Login';
import EditQuiz from './Components/EditQuiz/EditQuiz';
import CreateQuiz from './Components/CreateQuiz/CreateQuiz';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Signup} />
        <Route path='/account' component={Account} />
        <Route path='/login' component={Login} />
        <Route path='/quiz/:id' component={EditQuiz} />
        <Route path='/createquiz/:id' component={CreateQuiz} />
    </Switch>
)