import React, { Component } from 'react';
import axios from 'axios';

class CreateQuiz extends Component {
    constructor() {
        super()
        this.state = {
            quiz_title: '',
            quiz_intro: '',
            quiz_bg_img: '',
            admin: {}

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
        e.preventDefault();
        const { admin, quiz_title, quiz_intro, quiz_bg_img } = this.state;
        
        axios.post('/api/quiz', { admins_id: admin.id, quiz_title, quiz_intro, quiz_bg_img })
            .then((res) => {
                // console.log(res.data)
                // need to do something with the response... add to the list of quizzes
            })
        e.target.quiz_title.value = ''
        e.target.quiz_intro.value = ''
        e.target.quiz_bg_img.value = ''
    }

    render() {
        console.log(this.state.admin)
        return (
            <div>
                <h1>Create Quiz</h1>
                <div>
                    <form onSubmit={this.handleAddQuiz}>
                        <h2>Create New</h2>
                        <input type='text' name='quiz_title' placeholder='title' onChange={this.handleInfoUpdate} />
                        <input type='text' name='quiz_intro' placeholder='introduction' onChange={this.handleInfoUpdate} />
                        <input type='text' name='quiz_bg_img' placeholder='background image url' onChange={this.handleInfoUpdate} />
                        <button>Create</button> <br />
                    </form>
                </div>
                <button onClick={this.props.handleToggleNewQuiz}>X</button>
            </div>
        )
    }
}

export default CreateQuiz;