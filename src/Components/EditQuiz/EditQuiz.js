import React, { Component } from 'react';
import axios from 'axios';

class EditQuiz extends Component {
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

    handleInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleGetQuiz = () => {
        axios.get(`/api/quiz/${this.props.match.params.id}`)
            .then(res => {
                // console.log(res.data)
                const { quiz_title, quiz_intro, quiz_bg_img } = res.data[0]
                this.setState({
                    quiz_title,
                    quiz_intro,
                    quiz_bg_img
                })
            })
    }

    render() {
        console.log(this.state.quiz_title)
        return (
            <div className='EditQuizCont'>
                <div className='EditQuizHeader'>
                    <h2>Edit this quiz</h2>
                    <button>X</button>
                </div>
                <div className='quizzesCont'>
                    <div className='creatorCont'>
                        <form>
                            <div className='creatorFormItems'><h4>Quiz Title:</h4><input type='text' name='quiz_title' defaultValue={this.state.quiz_title} onChange={this.handleInfoUpdate} /></div>
                            <div className='creatorFormItems'><h4>Introduction:</h4><input type='text' name='quiz_intro' defaultValue={this.state.quiz_intro} onChange={this.handleInfoUpdate} /></div>
                            <div className='creatorFormItems'><h4>Background Image:</h4><input type='text' name='quiz_bg_img' defaultValue={this.state.quiz_bg_img} onChange={this.handleInfoUpdate} /></div>
                            <button>Submit edits</button> <br />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditQuiz;