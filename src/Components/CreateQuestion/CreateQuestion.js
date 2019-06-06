import React, { Component } from 'react';
import axios from 'axios';
import QuestionItem from '../QuestionItem/QuestionItem';
import { async } from 'q';

class CreateQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            remediation: '',
            answer: '',
            distractor1: '',
            distractor2: '',
            distractor3: '',
            questionInitialized: false,
            questions: []
        }
    }

    handleInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleQuestionAddedToggle = () => {
        this.setState({
            questionInitialized: !this.state.questionInitialized
        })
    }

    handleAddQuestion = async (e) => {
        // needs to add new question to db and be ready to add another question
        e.preventDefault();
        const { question, remediation, answer, distractor1, distractor2, distractor3 } = this.state;
        await axios.post('/api/question', { quizzes_id: this.props.quizDetails.id, question, remediation, answer, distractor1, distractor2, distractor3 })
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
        this.handleGetQuestions();
    }

    handleGetQuestions = () => {
        axios.get(`/api/questions/${this.props.quizDetails.id}`)
            .then(res => {
                this.setState({
                    questions: res.data
                })
            })
    }

    render() {
        // console.log(this.state.questions)
        const questionsMapped = this.state.questions.map((questionObj, ind) => {
            return (
                <QuestionItem
                    key={ind}
                    questionObj={questionObj}
                    handleGetQuestions={this.handleGetQuestions}/>
            )
        })
        return (
            <div>
                <h2>{this.props.quiz_title}</h2>
                <p>Next, add questions</p>
                {(this.state.questionInitialized === false)
                    ? (
                        <div>
                            <form onSubmit={this.handleAddQuestion}>
                                <div className='creatorFormItems'><h4>Question:</h4><input type='text' name='question' placeholder='question' onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Remediation:</h4><input type='text' name='remediation' placeholder='remediation' onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Answer:</h4><input type='text' name='answer' placeholder='answer' onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor1:</h4><input type='text' name='distractor1' placeholder='distractor1' onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor2:</h4><input type='text' name='distractor2' placeholder='distractor2' onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor3:</h4><input type='text' name='distractor3' placeholder='distractor3' onChange={this.handleInfoUpdate} /></div>
                                <button>Next</button> <br />
                            </form>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.handleQuestionAddedToggle}>add another question</button>
                            {questionsMapped}
                        </div>
                    )}

            </div>

        )
    }
}

export default CreateQuestion;