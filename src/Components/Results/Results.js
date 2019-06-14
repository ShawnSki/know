import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Bar, Line, Pie } from 'react-chartjs-2';
import './Results.css';

class Results extends Component {
    constructor() {
        super()
        this.state = {
            creation_date: '',
            quiz_title: '',
            quiz_average: null,
            quiz_completes: null,
            quiz_starts: null,

            chartData: {
                labels: ['Starts', 'Completions'],
                datasets: [
                    {
                        label: 'Users',
                        data: [4, 8],
                        backgroundColor: ['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.6)']
                    }
                ]
            }
        }
    }

    componentDidMount() {
        this.handleGetQuizResults();
    }

    handleGetQuizResults = () => {
        axios.get(`/results/admin/${this.props.match.params.id}`)
            .then(res => {
                console.log('res', res.data)
                const { creation_date, quiz_title } = res.data[0]
                const newDate = creation_date.split('T')
                const pointsArr = res.data
                    .filter(userObj => { if (userObj.quiz_points !== null || userObj.quiz_points === 0) return userObj })
                    .map(userObj => userObj.quiz_points)
                console.log('pointsArr', pointsArr)
                const reducer = (acc, cur) => acc + cur;
                const scoreAdded = pointsArr.reduce(reducer)
                const quizPercent = (scoreAdded / (pointsArr.length * 100)) * 100
                const newDatasets = [
                    {
                        data: [res.data.length, pointsArr.length]
                    }]
                this.setState({
                    creation_date: newDate[0],
                    quiz_title,
                    quiz_average: +quizPercent.toFixed(0),
                    quiz_starts: res.data.length,
                    quiz_completes: pointsArr.length,
                    chartData: {
                        datasets: newDatasets
                    }
                })
            })
    }

    render() {
        // console.log(this.state)
        const { creation_date, quiz_title, quiz_average, quiz_completes, quiz_starts } = this.state;
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
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Users of quiz'
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: { beginAtZero: true, },
                                    gridLines: {
                                        display: true,
                                        color: 'rgba(0, 0, 0, 0.1)'
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: true,
                                        color: 'rgba(0, 0, 0, 0.1)'
                                    }
                                }
                            ]
                        },


                    }} />
            </div>
        )
    }
}

export default Results;