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
            remediationShowing: false,
            scoreResults: []
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

    handleBtnClicked = (e) => {
        if (e.target.value === this.state.question.answer) {
            const addScore = [...this.state.scoreResults, 1]
            this.setState({
                scoreResults: addScore
            })
        } else {
            const subScore = [...this.state.scoreResults, 0]
            this.setState({
                scoreResults: subScore
            })
        }
        this.handleRemediationToggle();
    }

    handleRemediationToggle = () => {
        this.setState({
            remediationShowing: !this.state.remediationShowing
        })
    }

    handleNextQuestion = () => {
        const { scoreResults, questionCount } = this.state;
        if (questionCount !== 1) {
            this.setState({
                questionCount: this.state.questionCount -= 1
            })
            this.handleSetQuestion();
            this.handleRemediationToggle();
            this.props.handleCurrentNumber();
        } else if (questionCount === 1) {
            console.log('quiz completed')
            this.props.handleQuizCompledToggle(scoreResults);
        }
    }

    handleRandomizeAnswers = () => {
        const { answer, distractor1, distractor2, distractor3 } = this.state.question;
        const answersArray = [answer, distractor1, distractor2, distractor3];
        let i = answersArray.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = answersArray[i];
            answersArray[i] = answersArray[j];
            answersArray[j] = temp;
        }
        return answersArray
    }

    render() {
        console.log('scoreArr', this.state.scoreResults)
        const randomAnswers = this.handleRandomizeAnswers()
        const answerButtons = randomAnswers.map((answerChoice, ind) => {
            return (
                <div key={ind} className='quizAnswers'><button value={answerChoice} onClick={this.handleBtnClicked}>{answerChoice}</button></div>
            )
        })

        const { question, remediation } = this.state.question
        return (
            <div>
                {(this.state.remediationShowing === false)
                    ? (
                        <div className='quizQuestionCont'>
                            <div className='quizQuestion'>
                                <p>{question}</p>
                            </div>
                            <div className='quizzieRight'>
                                {answerButtons}
                            </div>
                        </div>
                    ) : (
                        <div className='quizQuestionCont'>
                            <div className='quizQuestion'>
                                <p>{question}</p>
                            </div>
                            <div className='quizzieRight'>
                                <div className='remediation'><p>{remediation}</p></div>
                                <button onClick={this.handleNextQuestion}>Next</button>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

export default QuizQuestion;