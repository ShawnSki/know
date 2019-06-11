import React, { Component } from 'react';
import axios from 'axios';
import './Quiz.css';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Quiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz_title: '',
            quiz_bg_img: '',
            quiz_survey1: '',
            survey1_options: '',
            totalNumber: null,
            currentNumber: 1
        }
    }

    componentDidMount() {
        this.handleGetQuiz();
    }

    handleGetQuiz = async () => {
        await axios.get(`/api/quiz/${this.props.match.params.id}`)
            .then(res => {
                const { quiz_title, quiz_bg_img, quiz_survey1, survey1_options } = res.data[0];
                this.setState({
                    quiz_title,
                    quiz_bg_img,
                    quiz_survey1,
                    survey1_options,
                    completedToggle: false
                })
            })
        this.handleGetQuestionCount();
    }

    handleGetQuestionCount = async () => {
        await axios.get(`/api/questions/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    totalNumber: res.data.length
                })
            })
    }

    handleCurrentNumber = () => {
        this.setState({
            currentNumber: this.state.currentNumber += 1
        })
    }

    handleQuizCompledToggle = () => {
        this.setState({
            completedToggle: true
        })
    }

    render() {
        const { quiz_title, quiz_bg_img, quiz_survey1, survey1_options, currentNumber, totalNumber } = this.state;
        return (
            <div style={{
                background: `url(${quiz_bg_img})no-repeat center center fixed`,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {(this.state.completedToggle === false)
                    ? (
                        <div className='quizBodyCont'>
                            <div className='quizBodyHeader'>
                                <div className='quizHeaderTitle'><h2>{quiz_title}</h2></div>
                                <div className='quizHeaderCounter'><h2>{currentNumber}/{totalNumber}</h2></div>
                            </div>
                            <div>
                                <QuizQuestion
                                    quizId={this.props.match.params.id}
                                    handleCurrentNumber={this.handleCurrentNumber}
                                    handleQuizCompledToggle={this.handleQuizCompledToggle} />
                            </div >
                        </div>
                    ) : (
                        <div className='quizBodyCont'>
                            <div>quiz completed</div>
                        </div>
                    )}
            </div>
        )
    }
}

export default Quiz;