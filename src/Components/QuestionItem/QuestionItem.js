import React, { Component } from 'react';
import axios from 'axios';
import '../QuestionItem/QuestionItem.css';

class questionItem extends Component {
    constructor() {
        super()
        this.state = {
            editToggle: false,
            question: '',
            remediation: '',
            answer: '',
            distractor1: '',
            distractor2: '',
            distractor3: ''
        }
    }

    componentDidMount() {
        this.handleGetQuestion();
    }

    handleDeleteQuestion = async () => {
        await axios.delete(`/api/question/${this.props.questionObj.id}`)
        this.props.handleGetQuestions()
    }

    handleEditToggle = () => {
        const { question, remediation, answer, distractor1, distractor2, distractor3 } = this.props.questionObj;
        this.setState({
            question,
            remediation,
            answer,
            distractor1,
            distractor2,
            distractor3,
            editToggle: !this.state.editToggle
        })
    }

    handleInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdateQuestion = (e) => {
        e.preventDefault();
        const { question, remediation, answer, distractor1, distractor2, distractor3 } = this.state;
        axios.put(`/api/question/${this.props.questionObj.id}`, { question, remediation, answer, distractor1, distractor2, distractor3 })
            .then((res) => {
                this.handleEditToggle();
                this.props.handleGetQuestions();
        })
    }

    handleGetQuestion = async () => {
        await axios.get(`/api/question/${this.props.questionObj.id}`)
        .then(res => {
                const { question, remediation, answer, distractor1, distractor2, distractor3 } = res.data[0]
                this.setState({
                    question,
                    remediation,
                    answer,
                    distractor1,
                    distractor2,
                    distractor3
                })
            })
    }

    render() {
        // console.log(this.state.question)
        return (
            <div>
                {(this.state.editToggle === false)
                    ? (
                        <div className='questionItemCont'>
                            <h4>{this.props.questionObj.question}</h4>
                            <div className='questionItembtnCont'>
                                <button onClick={this.handleEditToggle}>edit</button>
                                <button onClick={this.handleDeleteQuestion}>delete</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1>edit toggle</h1>
                            <form onSubmit={this.handleUpdateQuestion}>
                                <div className='creatorFormItems'><h4>Question:</h4><input type='text' name='question' defaultValue={this.state.question} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Remediation:</h4><input type='text' name='remediation' defaultValue={this.state.remediation} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Answer:</h4><input type='text' name='answer' placeholder='answer' onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor1:</h4><input type='text' name='distractor1' defaultValue={this.state.distractor1} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor2:</h4><input type='text' name='distractor2' defaultValue={this.state.distractor2} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor3:</h4><input type='text' name='distractor3' defaultValue={this.state.distractor3} onChange={this.handleInfoUpdate} /></div>
                                <button>Next</button> <br />
                            </form>
                        </div>
                    )}
            </div>

        )
    }
}

export default questionItem;