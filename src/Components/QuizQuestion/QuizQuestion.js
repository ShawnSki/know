import React, { Component } from 'react';
import axios from 'axios';

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            questionCount: null
        }
    }

    componentDidMount() {
        this.handleGetQuestions();
    }

    handleGetQuestions = () => {
        axios.get(`/api/questions/${this.props.quizId}`)
            .then(res => {
                this.setState({
                    questions: res.data,
                    questionCount: res.data.length
                })
            })
    }


    render() {
        console.log(this.state.questions[0])
        return (
            <div>
                <div className='quizQuestion'>
                    <p>question here </p>
                </div>
                <div className='quizAnswers'>
                    <button>Answer</button>
                    <button>Distractor stractoractor</button>
                    <button>Distractor</button>
                    <button>Distractor</button>
                </div>
            </div>
        )
    }
}

export default QuizQuestion;