import React, { Component } from 'react';
import { HorizontalBar, Pie } from 'react-chartjs-2';

class ChartSurvey1 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <div className='ChartSurvey1Cont'>
                    <HorizontalBar
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
                                        gridLines: {
                                            display: true,
                                            color: 'rgba(0, 0, 0, 0.1)'
                                        }
                                    }],
                                xAxes:
                                    [{
                                        ticks: { beginAtZero: true, max: 100 },
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