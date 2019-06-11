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
            currentNumber: 1,
            username: ''
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
                    completedToggle: false,
                    username: 'Knowwies-a-lot'
                })
            })
        this.handleGetQuestionCount();
        this.handleAddUser();
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

    handleAddUser = () => {
        axios.post('/api/user', { username: this.state.username, quizzes_id: this.props.match.params.id })
    }

    handleInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSurveyDropdownOptions = () => {
        var optionArr = this.state.survey1_options.split(',');

        const surveyOptArr = optionArr.map((obj, ind) => {
            return obj.trim()
        })
        return surveyOptArr
    }



    render() {
        const surveyOptions = this.handleSurveyDropdownOptions();
        const surveyOptItem = surveyOptions.map((surveyOpt, ind) => {
            return (
                <option key={ind} value='surveyOpt'>{surveyOpt}</option>
            )
        })
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
                            <div>
                                <h1>Knowwie Completed</h1>
                                <p>Submit the following information to view your results and leaderboard.</p>
                            </div>
                            <form>
                                <h4>Username (used for leaderboard):</h4><input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInfoUpdate} />
                                <h4>{quiz_survey1}:</h4>
                                <select className='dropdown'>
                                    <option value=''>- Select an option -</option>
                                    {surveyOptItem}
                                </select>
                            </form>
                        </div>
                    )}
            </div>
        )
    }
}

export default Quiz;