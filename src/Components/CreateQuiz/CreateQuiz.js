import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateQuestion from '../CreateQuestion/CreateQuestion';
import './CreateQuiz.css';

class CreateQuiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz_title: '',
            quiz_intro: '',
            quiz_bg_img: '',
            quiz_survey1: '',
            survey1_options: '',
            quizDetails: {},
            quizInitialized: false,
            adminObj: {}
        }
    }

    componentDidMount() {
        this.handleGetAdmin();
    }

    handleGetAdmin = async () => {
        await axios.get('/auth/dashboard')
            .then(res => 
                this.setState({
                    adminObj: res.data
                })
                )
            .catch((err) => {
                console.log(err)
            })
        if (!this.state.adminObj.firstname) {
            this.props.history.push('/register')
        }
    }

    handleInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddQuiz = async (e) => {
        // needs to submit quiz setup and then shows the question adder
        e.preventDefault();
        const { quiz_title, quiz_intro, quiz_bg_img, quiz_survey1, survey1_options } = this.state;
        await axios.post('/api/quiz', { admins_id: this.props.match.params.id, quiz_title, quiz_intro, quiz_bg_img, quiz_survey1, survey1_options })
            .then((res) => {
                this.setState({
                    quizDetails: res.data[0]
                })
            })
        this.handleQuizAddedToggle();
        // this.props.handleGetQuizzes()
    }

    handleQuizAddedToggle = () => {
        this.setState({
            quizInitialized: !this.state.quizInitialized
        })
    }

    render() {
        // console.log(this.props.match.params.id)
        return (
            <div className='createQuizCont'>
                <div className='createQuizHeader'>
                    <h2>Create a new quiz</h2>
                    <Link to='/dashboard'><button>Back</button></Link>
                </div>
                <div className='quizzesCont'>
                    {(this.state.quizInitialized === false)
                        ? (
                            <div className='creatorCont'>
                                <form onSubmit={this.handleAddQuiz}>
                                    <div className='creatorFormItems'><h4>Quiz Title:</h4><input type='text' name='quiz_title' placeholder='title' value={this.state.quiz_title} onChange={this.handleInfoUpdate} /></div>
                                    <div className='creatorFormItems'><h4>Introduction:</h4><input type='text' name='quiz_intro' placeholder='introduction' value={this.state.quiz_intro} onChange={this.handleInfoUpdate} /></div>
                                    <div className='creatorFormItems'><h4>Background Image:</h4><input type='text' name='quiz_bg_img' placeholder='background image url' value={this.state.quiz_bg_img} onChange={this.handleInfoUpdate} /></div>
                                    <div className='creatorFormItems'><h4>Survey Question:</h4><input type='text' name='quiz_survey1' placeholder='survey question' value={this.state.quiz_survey1} onChange={this.handleInfoUpdate} /></div>
                                    <div className='creatorFormItems'><h4>Survey Options:</h4><input type='text' name='survey1_options' placeholder='survey options' value={this.state.survey1_options} onChange={this.handleInfoUpdate} /></div>
                                    <button>Submit and Add Questions</button> <br />
                                </form>
                                     </div>
                        ) : (
                            <CreateQuestion
                                quiz_title={this.state.quiz_title}
                                quizDetails={this.state.quizDetails}
                            />
                        )}
                </div>
            </div>
        )
    }
}

export default CreateQuiz;