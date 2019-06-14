import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class ChartQuestions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

   

    render() {
        // console.log('props', this.props)
        return (
            <div>
                <Bar
                    data={this.props.chartData}
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