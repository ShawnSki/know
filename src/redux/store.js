import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './adminReducer';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
    admin: reducer,
    quizzes: quizReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));