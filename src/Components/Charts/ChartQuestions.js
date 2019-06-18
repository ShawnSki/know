import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ChartQuestions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

   

    render() {
        return (
            <div>
                <Bar
                    data={this.props.chartData}
                    height={400}
                    // width={100}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        tooltips: false,
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
                                    ticks: { beginAtZero: true, max: 100 },
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