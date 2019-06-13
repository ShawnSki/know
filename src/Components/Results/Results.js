import React, { Component } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Results extends Component {
    constructor() {
        super()
        this.state = {
            creation_date: '',
            quiz_title: '',

            chartData: {
                labels: ['Starts', 'Completions'],
                datasets: [
                    {
                        label: 'Users',
                        data: [66, 33],
                        backgroundColor: ['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.6)']
                    }
                ]
            }
        }
    }

    componentDidMount() {
        this.handleGetQuizResults();
    }

    // handleGetQuizResults = () => {
    //     axios.get(`/results/admin/${this.props.match.params.id}`)
    //         .then(res => {
    //             console.log('res', res.data)
    //             const { creation_date, quiz_title } = res.data[0]
    //             const newDate = creation_date.split('T')
    //             this.setState({
    //                 creation_date: newDate[0],
    //                 quiz_title
    //             })
    //         })
    // }

    handleGetQuizResults = () => {
        axios.get(`/results/admin/${this.props.match.params.id}`)
            .then(res => {
                // console.log('res', res.data)
                const { creation_date, quiz_title } = res.data[0]
                const newDate = creation_date.split('T')
                const pointsArr = res.data
                    .filter(userObj => { if (userObj.quiz_points !== null) return userObj.quiz_points })
                    .map(userObj => userObj.quiz_points)
                const newDatasets = [
                    {
                        data: [res.data.length, pointsArr.length]
                    }]
                this.setState({
                    creation_date: newDate[0],
                    quiz_title,
                    chartData: {
                        datasets: newDatasets
                    }
                })
            })
    }

    render() {
        const { creation_date, quiz_title } = this.state;
        return (
            <div>
                <div className='leaderHeader'>
                    <h1>Results: </h1>
                    <p>Created: </p>
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
                                        display: true ,
                                        color: 'rgba(0, 0, 0, 0.1)'
                                      }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: true ,
                                        color: 'rgba(0, 0, 0, 0.1)'
                                      }
                                }
                            ]
                        },
                        
                        
                    }}
                />
                <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Users of quiz'
                        },
                        legend: {
                            display: false
                        }
                    }}
                />
            </div>
        )
    }
}

export default Results;