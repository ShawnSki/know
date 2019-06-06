import React, { Component } from 'react';
import axios from 'axios';
import CreateQuestion from '../CreateQuestion/CreateQuestion';
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

    componentDidMount = () => {
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

    handleAddQuiz = async (e) => {
        // needs to submit quiz setup and then shows the question adder
        e.preventDefault();
        const { admin, quiz_title, quiz_intro, quiz_bg_img } = this.state;

        await axios.post('/api/quiz', { admins_id: admin.id, quiz_title, quiz_intro, quiz_bg_img })
            .then((res) => {
                // console.log(res.data[0].id)
                this.setState({
                    quizDetails: res.data[0]
                })
                // need to do something with the response... add to the list of quizzes
            })
        // e.target.quiz_title.value = ''
        // e.target.quiz_intro.value = ''
        // e.target.quiz_bg_img.value = ''
        this.handleQuizAddedToggle();
        this.props.handleGetQuizzes()
    }

    handleAddQuestion = (e) => {
        // needs to add new question to db and be ready to add another question
        e.preventDefault();
        const { quizDetails, question, remediation, answer, distractor1, distractor2, distractor3 } = this.state;
        axios.post('/api/question', { quizzes_id: quizDetails.id, question, remediation, answer, distractor1, distractor2, distractor3 })
            .then((res) => {
                // console.log(res.data)
            })
        this.setState({
            question: '',
            remediation: '',
            answer: '',
            distractor1: '',
            distractor2: '',
            distractor3: ''
        })
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
            <div className='createQuizCont'>
                <div className='createQuizHeader'>
                    <h2>Create a new quiz</h2>
                    <button onClick={this.props.handleToggleNewQuiz}>X</button>
                </div>
                <div className='quizzesCont'>
                    {(this.state.quizInitialized === false)
                        ? (
                            <div className='creatorCont'>
                                <form onSubmit={this.handleAddQuiz}>
                                    <div className='creatorFormItems'><h4>Quiz Title:</h4><input type='text' name='quiz_title' placeholder='title' value={this.state.quiz_title} onChange={this.handleInfoUpdate} /></div>
                                    <div className='creatorFormItems'><h4>Introduction:</h4><input type='text' name='quiz_intro' placeholder='introduction' value={this.state.quiz_intro} onChange={this.handleInfoUpdate} /></div>
                                    <div className='creatorFormItems'><h4>Background Image:</h4><input type='text' name='quiz_bg_img' placeholder='background image url' value={this.state.quiz_bg_img} onChange={this.handleInfoUpdate} /></div>
                                    <button>Submit and Add Question</button> <br />
                                </form>
                            </div>
                        ) : (

                            <CreateQuestion
                                questionInitialized={this.state.questionInitialized}
                                quiz_title={this.state.quiz_title}
                                handleAddQuestion={this.handleAddQuestion}
                                handleInfoUpdate={this.handleInfoUpdate}
                                handleQuestionAddedToggle={this.handleQuestionAddedToggle}
                            />
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