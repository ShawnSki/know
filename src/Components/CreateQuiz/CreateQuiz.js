import React, { Component } from 'react';
import axios from 'axios';

class CreateQuiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz_title: '',
            quiz_intro: '',
            quiz_bg_img: ''

        }
    }

    handleInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddQuiz = (e) => {
        e.preventDefault();
        const { quiz_title, quiz_intro, quiz_bg_img } = this.state;
        axios.post('/api/quiz', { quiz_title, quiz_intro, quiz_bg_img })
            .then((res) => {
                console.log(res.data)
                // need to do something with the response... add to the list of quizzes
            })
        e.target.quiz_title.value = ''
        e.target.quiz_intro.value = ''
        e.target.quiz_bg_img.value = ''
    }

    render() {
        return (
            <div>
                <h1>Create Quiz</h1>
                <div>
                    <form onSubmit={this.handleAddQuiz}>
                        <h2>Create New</h2>
                        <input type='text' name='quiz_title' placeholder='title' onChange={this.handleInfoUpdate} />
                        <input type='text' name='quiz_intro' placeholder='introduction' onChange={this.handleInfoUpdate} />
                        <input type='text' name='quiz_bg_img' placeholder='background image url' onChange={this.handleInfoUpdate} />
                        <button>Create Quiz</button> <br />
                    </form>
                </div>
                <button onClick={this.props.handleToggleNewQuiz}>JK nevermind</button>
            </div>
        )
    }
}

export default CreateQuiz;