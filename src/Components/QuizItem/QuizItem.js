import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './QuizItem.css';

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
                    <Link to={`/results/${this.props.quizObj.id}`}><button><img src='https://yellingyak.com/wp-content/uploads/2019/06/icon_results.png' alt='results' /></button></Link>
                    <Link to={`/quiz/${this.props.quizObj.id}`}><button><img src='https://yellingyak.com/wp-content/uploads/2019/06/icon_edit.png' alt='edit' /></button></Link>
                    <button onClick={this.handleDeleteQuiz}><img src='https://yellingyak.com/wp-content/uploads/2019/06/icon_delete.png' alt='delete' /></button>
                    <button ><img src='https://yellingyak.com/wp-content/uploads/2019/06/icon_share.png' alt='share' /></button>
                </div>
            </div>
        )
    }
}

export default QuizItem;