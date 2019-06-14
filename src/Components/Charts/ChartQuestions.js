import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class ChartQuestions extends Component {
    constructor() {
        super()
        this.state = {
            chartData: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                datasets: [
                    {
                        label: 'Users',
                        data: [30, 50, 22, 98, 100, 88, 44, 90, 45],
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                ]
            }
        }
    }

    componentDidMount() {
        // this.handleSortData();
    }
    componentWillReceiveProps() {
        console.log(this.props)
    }
    handleSortData = () => {
        const { resultsArr } = this.props;
        const newArr = resultsArr
            .filter(obj => { if (obj.quiz_results !== null) return obj })
            .map(obj => obj.quiz_results)
        const combinedScores = newArr.reduce((r, arr) => arr.map((obj, ind) => (r[ind] || 0) + obj), []);
        const percentScores = combinedScores.map(points => (points / newArr.length) * 100)
        const newDatasets = [
            {
                data: percentScores
            }]
        return (
            this.setState({
                chartData: {
                    datasets: newDatasets
                }
            })
        )
    }

    render() {
        console.log('state', this.state)
        return (
            <div>
                <Bar
                    data={this.state.chartData}
                    height={70}
                    // width={900}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        title: {
                            display: true,
                            text: ''
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes:
                                [{
                                    ticks: { beginAtZero: true, },
                                    gridLines: {
                                        display: true,
                                        color: 'rgba(0, 0, 0, 0.1)'
                                    }
                                }],
                            xAxes:
                                [{
                                    gridLines: {
                                        display: true,
                                        color: 'rgba(0, 0, 0, 0.1)'
                                    }
                                }]
                        }
                    }} />
            </div>
        )
    }
}

export default ChartQuestions;