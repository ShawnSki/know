import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Signup from './Components/Register/Signup';
import Account from './Components/Account/Account';
import Login from './Components/Register/Login';
import EditQuiz from './Components/EditQuiz/EditQuiz';
import CreateQuiz from './Components/CreateQuiz/CreateQuiz';
import QuizList from './Components/QuizList/QuizList';
import QuizSetup from './Components/QuizSetup/QuizSetup';
import Quiz from './Components/Quiz/Quiz';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import Results from './Components/Results/Results';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Signup} />
        <Route path='/account' component={Account} />
        <Route path='/login' component={Login} />
        <Route path='/quiz/:id' component={EditQuiz} />
        <Route path='/createquiz/:id' component={CreateQuiz} />
        <Route path='/quizlist/' component={QuizList} />
        <Route path='/knowwie/:id' component={QuizSetup} />
        <Route path='/knowwiequiz/:id' component={Quiz} />
        <Route path='/leaderboard/:id' component={LeaderBoard} />
        <Route path='/results/:id' component={Results} />
    </Switch>
)