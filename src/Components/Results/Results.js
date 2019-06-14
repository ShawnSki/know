import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ChartQuestions from '../Charts/ChartQuestions';
import './Results.css';
import { async } from 'q';

class Results extends Component {
    constructor() {
        super()
        this.state = {
            creation_date: '',
            quiz_title: '',
            quiz_average: null,
            quiz_completes: null,
            quiz_starts: null,
            resultsArr: []
        }
    }

    componentDidMount() {
        this.handleGetQuizResults();
    }

    handleGetQuizResults = async () => {
        await axios.get(`/results/admin/${this.props.match.params.id}`)
            .then(res => {
                const { creation_date, quiz_title } = res.data[0]
                const newDate = creation_date.split('T')
                const pointsArr = res.data
                    .filter(userObj => { if (userObj.quiz_points !== null || userObj.quiz_points === 0) return userObj })
                    .map(userObj => userObj.quiz_points)
                const reducer = (acc, cur) => acc + cur;
                const scoreAdded = pointsArr.reduce(reducer)
                const quizPercent = (scoreAdded / (pointsArr.length * 100)) * 100
                this.setState({
                    resultsArr: res.data,
                    creation_date: newDate[0],
                    quiz_title,
                    quiz_average: +quizPercent.toFixed(0),
                    quiz_starts: res.data.length,
                    quiz_completes: pointsArr.length
                })
            })
    }

    render() {
        const { creation_date, quiz_title, quiz_average, quiz_completes, quiz_starts, resultsArr } = this.state;
        return (
            <div className='resultsPageCont'>
                <div className='resultsHeader'>
                    <div>
                        <h1>Results: {quiz_title}</h1>
                        <p>Created: {creation_date}</p>
                    </div>
                    <Link to='/dashboard'><button>Back</button></Link>
                </div>
                <div className='resultsSubHeader'>
                    <div className='subHeaderBox'>
                        <h3>AVERAGE SCORE</h3><br />
                        <h1>{quiz_average}%</h1>
                    </div>
                    <div className='subHeaderBox'>
                        <h3># PARTICIPANTS</h3><br />
                        <h1>{quiz_starts}</h1>
                    </div>
                    <div className='subHeaderBox'>
                        <h3># COMPLETIONS</h3><br />
                        <h1>{quiz_completes}</h1>
                    </div>
                </div>
                <div className='chartQuestionCont'>
                    <h1>Average Score By Question</h1>
                    <ChartQuestions resultsArr={resultsArr} />
                </div>
            </div>
        )
    }
}

export default Results;