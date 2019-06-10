import React, { Component } from 'react';
import axios from 'axios';
import './Quiz.css';

class Quiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz_title: '',
            quiz_bg_img: '',
            quiz_survey1: '',
            survey1_options: ''
        }
    }

    componentDidMount() {
        this.handleGetQuiz();
    }

    handleGetQuiz = () => {
        axios.get(`/api/quiz/${this.props.match.params.id}`)
            .then(res => {
                const { quiz_title, quiz_bg_img } = res.data[0];
                this.setState({
                    quiz_title,
                    quiz_bg_img
                })
            })
    }


    render() {
        const { quiz_title, quiz_intro, quiz_bg_img } = this.state;
        return (
            <div style={{
                background: `url(${quiz_bg_img}) no-repeat center center fixed`,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }} >
                <div className='quizBodyCont'>
                    <div className='quizBodyHeader'>
                        <div className='quizHeaderTitle'><h2>{quiz_title}</h2></div>
                        <div className='quizHeaderCounter'><h2>1/9</h2></div>
                    </div>
                    <div className='quizQuestionCont'>
                        <div className='quizQuestion'>
                            <p>question here question here question here question here question here question here question here question here question here question here question here quesdsfaf a afsda fas af tion here question here question here question here question here question here question here question here question here question here question here question here question here question here question here question here question hesdf sdf asdf re question here question here question here question here question here question here question here question here question here question here question here question here quest sdfa dfion here question here question here question here question here question here question here question here question here question here question here question here quest asdfa dfion here question here question here question here question here </p>
                        </div>
                        <div className='quizAnswers'>
                            <button>Answer</button>
                            <button>Distractor stractor stractor stractor stractor stractor stractor stractor stractor stractor stractor stractor stractor stractor stractor stractor stractor </button>
                            <button>Distractor</button>
                            <button>Distractor</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Quiz;