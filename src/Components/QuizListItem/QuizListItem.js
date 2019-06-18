import React from 'react';
import { Link } from 'react-router-dom';
import './QuizListItem.css';

const QuizListItem = (props) => {
    const newDate = props.quizObj.creation_date.split('T')
        return (
            <div className='listItemListers'>
                <Link to={`/knowwie/${props.quizObj.id}`}><h4>{props.quizObj.quiz_title}</h4></Link>
                <h4>{newDate[0]}</h4>
            </div>
        )
}

export default QuizListItem;