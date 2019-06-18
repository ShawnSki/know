import React, { Component } from 'react';
import axios from 'axios';
import QuizListItem from '../QuizListItem/QuizListItem';
import './QuizList.css';

class QuizList extends Component {
    constructor() {
        super()
        this.state = {
            quizzes: []
        }
    }

    componentDidMount() {
        this.handleGetQuizzes();
    }

    handleGetQuizzes = () => {
        axios.get('/api/quizzes')
            .then(res => {
                this.setState({
                    quizzes: res.data
                })
            })
    }

    render() {
        const quizzesMapped = this.state.quizzes.map((quizObj, ind) => {
            return (
                <QuizListItem
                    key={ind}
                    quizObj={quizObj} />
            )
        })
        return (
            <div className='listPageCont'>
                <div className='listHeader'>
                    <h1>Knowwie's</h1>
                    <p>Participate in a publically hosted Knowwie.</p>
                </div>
                <div className='listListings'>
                    {quizzesMapped}
                </div>
            </div>
        )
    }
}

export default QuizList;