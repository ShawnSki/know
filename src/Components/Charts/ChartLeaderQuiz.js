import React, { Component } from 'react';
import { HorizontalBar, Bar } from 'react-chartjs-2';

class ChartLeaderQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        
        const thisData = {
                datasets: [
                    {
                        label: false,
                        data: [this.props.points],
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    {
                        label: 'Possible',
                        data: [100],
                        backgroundColor: 'rgba(0, 0, 0, 0.1)'
                    },
                ]
            
        }
        return (
            <div>
                    <HorizontalBar
                        data={thisData}
                        height={20}
                        // width={900}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            tooltips: false,
                            title: {
                                display: false,
                                text: ''
                            },
                            legend: {
                                display: false
                            },
                            scales: {
                                yAxes:
                                    [{
                                        ticks: { display: false },
                                        gridLines: {
                                            display: false,
                                            color: 'rgba(0, 0, 0, 0)'
                                        },
                                        stacked:true
                                    }],
                                xAxes:
                                    [{
                                        ticks: { display: false, max: 100 },
                                        gridLines: {
                                            display: false,
                                            color: 'rgba(0, 0, 0, 0)'
                                        },
                                        stacked:true
                                    }]
                            }
                        }} />
            </div>
        )
    }
}

export default ChartLeaderQuiz;