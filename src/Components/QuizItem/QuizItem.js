import React, { Component } from 'react';
import './QuizItem.css';

class QuizItem extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        console.log(this.props.quizObj)
        return (
            <div className='quizItemCont'>
                <h4>{this.props.quizObj.quiz_title}</h4>
                <div className='quizItembtnCont'>
                    <button>results</button>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        )
    }
}

export default QuizItem;