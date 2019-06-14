import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class ChartSurvey1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

   

    render() {
        return (
            <div>
                <HorizontalBar
                    data={this.props.chartData}
                    height={60}
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

export default ChartSurvey1;