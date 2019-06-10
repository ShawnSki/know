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

    handleDefaultImage(e) {
        e.target.src = 'http://shawnski.com/wp-content/uploads/2017/12/snowbird_ski_photographer-21.jpg'
    }


    render() {
        const { quiz_title, quiz_intro, quiz_bg_img } = this.state;
        return (
            <div className='setupCont'>
                <div className='setupLeftCont'>
                    <img alt='image' src={quiz_bg_img} onError={this.handleDefaultImage} />
                    <h2>{quiz_title}</h2> <br />
                    <p>{quiz_intro}</p>
                    <Link to={`/knowwiequiz/${this.props.match.params.id}`} ><button>start</button></Link>
                </div>
                <div className='setupRightCont'>
                    <div className='setupRight'>
                        <h1>Wanna know what they know?</h1>
                        <p>Create and share a knowwie of your own today. </p>
                        <button>Create a free account</button>
                    </div>
                </div>
            </div >
        )
    }
}

export default QuizSetup;