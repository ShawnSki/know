import React, { Component } from 'react';
import axios from 'axios';
import QuizListItem from '../QuizListItem/QuizListItem';

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
            <div>
                <h4>Quiz List</h4>
                {quizzesMapped}
            </div>
        )
    }
}

export default QuizList;