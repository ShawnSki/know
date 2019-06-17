import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './QuizSetup.css';

class QuizSetup extends Component {
    constructor() {
        super()
        this.state = {
            quiz_title: '',
            quiz_intro: '',
            quiz_bg_img: ''
        }
    }

    componentDidMount() {
        this.handleGetQuiz();
    }

    handleGetQuiz = () => {
        axios.get(`/api/quiz/${this.props.match.params.id}`)
            .then(res => {
                const { quiz_title, quiz_intro, quiz_bg_img } = res.data[0];
                this.setState({
                    quiz_title,
                    quiz_intro,
                    quiz_bg_img
                })
            })
    }

    render() {
        const { quiz_title, quiz_intro, quiz_bg_img } = this.state;
        return (
            <div className='setupCont'>
                <div className='setupHeader'>
                    <h1>You've been invited to participate in this Knowwie.</h1>
                </div>
                <div className='setupQuizCont'>
                    <div className='setupImg'>
                        <img alt='image' src={quiz_bg_img} />
                    </div>
                    <div className='setupContent'>
                        <h2>{quiz_title}</h2> <br />
                        <p>{quiz_intro}</p>
                        <Link to={`/knowwiequiz/${this.props.match.params.id}`} ><button>start</button></Link>
                    </div>
                </div>
            </div >
        )
    }
}

export default QuizSetup;