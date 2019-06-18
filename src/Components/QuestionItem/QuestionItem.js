import React, { Component } from 'react';
import axios from 'axios';
import './QuestionItem.css';

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

    handleDeleteQuestion = () => {
        axios.delete(`/api/question/${this.props.questionObj.id}`)
            .then(res => {
                this.props.handleGetQuestions()
            })
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
            <div className='questionItemHolder'>
                {(this.state.editToggle === false)
                    ? (
                        <div className='questionItemCont'>
                            <h4>{this.props.questionObj.question}</h4>
                            <div className='questionItembtnCont'>
                                <div className='altButton'><button onClick={this.handleEditToggle}><img src='https://yellingyak.com/wp-content/uploads/2019/06/icon_edit.png' alt='edit' /></button></div>
                                <div className='altButton'><button onClick={this.handleDeleteQuestion}><img src='https://yellingyak.com/wp-content/uploads/2019/06/icon_delete.png' alt='delete' /></button></div>
                            </div>
                        </div>
                    ) : (
                        <div className='questionItemEdit'>
                            <h3>Edit Question</h3>
                            <form onSubmit={this.handleUpdateQuestion}>
                                <div className='creatorFormItems'><h4>Question:</h4><input type='text' name='question' defaultValue={this.state.question} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Remediation:</h4><input type='text' name='remediation' defaultValue={this.state.remediation} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Answer:</h4><input type='text' name='answer' defaultValue={this.state.answer} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor1:</h4><input type='text' name='distractor1' defaultValue={this.state.distractor1} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor2:</h4><input type='text' name='distractor2' defaultValue={this.state.distractor2} onChange={this.handleInfoUpdate} /></div>
                                <div className='creatorFormItems'><h4>Distractor3:</h4><input type='text' name='distractor3' defaultValue={this.state.distractor3} onChange={this.handleInfoUpdate} /></div>
                                <div className='questionItemEditBtn'><button>Submit Changes</button> <br /></div>
                            </form>
                        </div>
                    )}
            </div>

        )
    }
}

export default questionItem;