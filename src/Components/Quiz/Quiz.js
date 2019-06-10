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
            survey1_options: ''
        }
    }

    componentDidMount() {
        this.handleGetQuiz();
    }

    handleGetQuiz = () => {
        axios.get(`/api/quiz/${this.props.match.params.id}`)
            .then(res => {
                const { quiz_title, quiz_bg_img, quiz_survey1, survey1_options } = res.data[0];
                this.setState({
                    quiz_title,
                    quiz_bg_img,
                    quiz_survey1,
                    survey1_options
                })
            })
    }

    // handleGetQuestions = () => {
    //     axios.get(`/api/questions/${this.props.match.params.id}`)
    //         .then(res => {
    //             this.setState({
    //                 questions: res.data,
    //                 questionCount: res.data.length
    //             })
    //         })
    // }



    render() {
        
        const { quiz_title, quiz_bg_img, quiz_survey1, survey1_options } = this.state;
        return (
            <div style={{
                background: `url(${quiz_bg_img}) no-repeat center center fixed`,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div className='quizBodyCont'>
                    <div className='quizBodyHeader'>
                        <div className='quizHeaderTitle'><h2>{quiz_title}</h2></div>
                        <div className='quizHeaderCounter'><h2>1/22</h2></div>
                    </div>
                    <div className='quizQuestionCont'>
                    <QuizQuestion quizId={this.props.match.params.id} />
                        </div >
                    </div>
                </div>
                )
            }
        }
        
export default Quiz;