import React, { Component } from 'react';
import axios from 'axios';
import './CreateQuiz.css';

class CreateQuiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz_title: '',
            quiz_intro: '',
            quiz_bg_img: '',
            admin: {},
            quizDetails: {},
            question: '',
            remediation: '',
            answer: '',
            distractor1: '',
            distractor2: '',
            distractor3: '',
            quizInitialized: false,
            questionInitialized: false
        }
    }

    componentDidMount() {
        this.handleGetAdmin();
    }

    handleGetAdmin = () => {
        axios.get('/auth/admin')
            .then((res) => {
                this.setState({
                    admin: res.data
                })
            })
    }

    handleInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddQuiz = (e) => {
        // needs to submit quiz setup and then shows the question adder
        e.preventDefault();
        const { admin, quiz_title, quiz_intro, quiz_bg_img } = this.state;

        axios.post('/api/quiz', { admins_id: admin.id, quiz_title, quiz_intro, quiz_bg_img })
            .then((res) => {
                // console.log(res.data[0].id)
                this.setState({
                    quizDetails: res.data[0]
                })
                // need to do something with the response... add to the list of quizzes
            })
        e.target.quiz_title.value = ''
        e.target.quiz_intro.value = ''
        e.target.quiz_bg_img.value = ''
        this.handleQuizAddedToggle();
    }

    handleAddQuestion = (e) => {
        // needs to add new question to db and be ready to add another question
        e.preventDefault();
        const { quizDetails, question, remediation, answer, distractor1, distractor2, distractor3 } = this.state;
        axios.post('/api/question', { quizzes_id: quizDetails.id, question, remediation, answer, distractor1, distractor2, distractor3 })
            .then((res) => {
                console.log(res.data)
            })
        e.target.question.value = ''
        e.target.remediation.value = ''
        e.target.answer.value = ''
        e.target.distractor1.value = ''
        e.target.distractor2.value = ''
        e.target.distractor3.value = ''
        this.handleQuestionAddedToggle();
    }

    handleQuizAddedToggle = () => {
        this.setState({
            quizInitialized: !this.state.quizInitialized
        })
    }

    handleQuestionAddedToggle = () => {
        this.setState({
            questionInitialized: !this.state.questionInitialized
        })
    }

    render() {
        return (
            <div>
                <h1>Create Quiz Page</h1>
                <button onClick={this.props.handleToggleNewQuiz}>X</button>
                <div className='quizzesCont'>
                    {(this.state.quizInitialized === false)
                        ? (
                            <div className='creatorCont'>
                                <form onSubmit={this.handleAddQuiz}>
                                    <h2>Create New Quiz</h2>
                                    <div className='creatorFormItems'><h4>Quiz Title:</h4><input type='text' name='quiz_title' placeholder='title' onChange={this.handleInfoUpdate} /></div>
                                    <div className='creatorFormItems'><h4>Introduction:</h4><input type='text' name='quiz_intro' placeholder='introduction' onChange={this.handleInfoUpdate} /></div>
                                    <div className='creatorFormItems'><h4>Background Image:</h4><input type='text' name='quiz_bg_img' placeholder='background image url' onChange={this.handleInfoUpdate} /></div>
                                    <button>Submit and Add Question</button> <br />
                                </form>
                            </div>
                        ) : (
                            <div>
                                <h2>Add question to quiz: {this.state.quiz_title}</h2>
                                {(this.state.questionInitialized === false)
                                    ? (
                                        <div>
                                            <form onSubmit={this.handleAddQuestion}>
                                                <div className='creatorFormItems'><h4>Question:</h4><input type='text' name='question' placeholder='question' onChange={this.handleInfoUpdate} /></div>
                                                <div className='creatorFormItems'><h4>Remediation:</h4><input type='text' name='remediation' placeholder='remediation' onChange={this.handleInfoUpdate} /></div>
                                                <div className='creatorFormItems'><h4>Answer:</h4><input type='text' name='answer' placeholder='answer' onChange={this.handleInfoUpdate} /></div>
                                                <div className='creatorFormItems'><h4>Distractor1:</h4><input type='text' name='distractor1' placeholder='distractor1' onChange={this.handleInfoUpdate} /></div>
                                                <div className='creatorFormItems'><h4>Distractor2:</h4><input type='text' name='distractor2' placeholder='distractor2' onChange={this.handleInfoUpdate} /></div>
                                                <div className='creatorFormItems'><h4>Distractor3:</h4><input type='text' name='distractor3' placeholder='distractor3' onChange={this.handleInfoUpdate} /></div>
                                                <button>Next</button> <br />
                                            </form>
                                        </div>
                                    ) : (
                                        <div>
                                            <button onClick={this.handleQuestionAddedToggle}>add another question</button>
                                        </div>
                                    )}
                            </div>
                        )
                    }
                </div>
                <div>
                    <h2>question list here (component)</h2>
                </div>
            </div>
        )
    }
}

export default CreateQuiz;