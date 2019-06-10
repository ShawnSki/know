import React from 'react';
import { Link } from 'react-router-dom';

const QuizListItem = (props) => {
        return (
            <div>
                <Link to={`/knowwie/${props.quizObj.id}`}><h4>{props.quizObj.quiz_title}</h4></Link>
            </div>
        )
}

export default QuizListItem;