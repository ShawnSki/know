import React, { Component } from 'react';
import axios from 'axios';
import './QuizQuestion.css';

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            question: {},
            questionCount: null,
            remediationShowing: false
        }
    }

    componentDidMount() {
        this.handleGetQuestions();
    }

    handleGetQuestions = async () => {
        await axios.get(`/api/questions/${this.props.quizId}`)
            .then(res => {
                this.setState({
                    questions: res.data,
                    questionCount: res.data.length
                })
            })
        this.handleSetQuestion();
    }

    handleSetQuestion = () => {
        this.setState({
            question: this.state.questions[this.state.questionCount - 1]
        })
    }

    
    handleRemediationToggle = () => {
        this.setState({
            remediationShowing: !this.state.remediationShowing
        })
    }
    
    handleNextQuestion = () => {
        const { questionCount } = this.state;
        if (questionCount !== 1) {
            this.setState({
                questionCount: this.state.questionCount -= 1
            })
            this.handleSetQuestion();
            this.handleRemediationToggle();
            this.props.handleCurrentNumber();
        } else if (questionCount === 1) {
            console.log('quiz completed')
            this.props.handleQuizCompledToggle();
        }
    }

    render() {
        console.log(this.state.questionCount)
        const { question, remediation, answer, distractor1, distractor2, distractor3 } = this.state.question
        return (
            <div>
                {(this.state.remediationShowing === false)
                    ? (
                        <div className='quizQuestionCont'>
                            <div className='quizQuestion'>
                                <p>{question}</p>
                            </div>
                            <div className='quizAnswers'>
                                <button onClick={this.handleRemediationToggle}>{answer}</button>
                                <button onClick={this.handleRemediationToggle}>{distractor1}</button>
                                <button onClick={this.handleRemediationToggle}>{distractor2}</button>
                                <button onClick={this.handleRemediationToggle}>{distractor3}</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='remediationCont'>
                                <div className='remediation'>{remediation}</div>
                                <button onClick={this.handleNextQuestion}>Next</button>
                            </div>
                            <div className='quizQuestionCont'>
                                <div className='quizQuestion'>
                                    <p>{question}</p>
                                </div>
                                <div className='quizAnswers'>
                                    <button disabled>{answer}</button>
                                    <button disabled>{distractor1}</button>
                                    <button disabled>{distractor2}</button>
                                    <button disabled>{distractor3}</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

export default QuizQuestion;