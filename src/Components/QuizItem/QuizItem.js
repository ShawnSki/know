import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './QuizItem.css';
var iconShare = require('../../images/icon_share.png');
var iconDelete = require('../../images/icon_delete.png');
var iconEdit = require('../../images/icon_edit.png');
var iconResults = require('../../images/icon_results.png');

class QuizItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    

    handleDeleteQuiz = () => {
        axios.delete(`/api/quiz/${this.props.quizObj.id}`)
            .then(res => {
                this.props.handleGetQuizzes()
            })
    }

    render() {
        // console.log(this.props.quizObj.id)
        return (
            <div className='quizItemCont'>
                <h4>{this.props.quizObj.quiz_title}</h4>
                <div className='quizItembtnCont'>
                    <Link to={`/results/${this.props.quizObj.id}`}><button><img src={iconResults} alt='results' /></button></Link>
                    <Link to={`/quiz/${this.props.quizObj.id}`}><button><img src={iconEdit} alt='edit' /></button></Link>
                    <button onClick={this.handleDeleteQuiz}><img src={iconDelete} alt='delete' /></button>
                    <button ><img src={iconShare} alt='share' /></button>
                </div>
            </div>
        )
    }
}

export default QuizItem;