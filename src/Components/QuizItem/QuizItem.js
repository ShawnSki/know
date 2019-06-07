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
    

    handleDeleteQuiz = async () => {
        await axios.delete(`/api/quiz/${this.props.quizObj.id}`)
        this.props.handleGetQuizzes()
    }

    render() {
        // console.log(this.props.quizObj.id)
        return (
            <div className='quizItemCont'>
                <h4>{this.props.quizObj.quiz_title}</h4>
                <div className='quizItembtnCont'>
                    <button>results</button>
                    <Link to={`/quiz/${this.props.quizObj.id}`}><button>edit</button></Link>
                    <button onClick={this.handleDeleteQuiz}>delete</button>
                </div>
            </div>
        )
    }
}

export default QuizItem;