import React, { Component } from 'react';
import ChartLeaderQuiz from '../Charts/ChartLeaderQuiz';
import './LeaderListing.css';

class LeaderListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {}
        }
    }

    componentDidMount() {
        this.handleChartData()
    }

    handleChartData = () => {
        const { quiz_results } = this.props.userObj
        this.setState({
            chartData: {
                datasets: [
                    {
                        label: false,
                        data: [{ quiz_results }],
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                    },
                    {
                        label: 'Possible',
                        data: [120],
                        backgroundColor: 'rgba(0, 0, 0, 0.1)'
                    },
                ]
            }
        })
    }


    render() {
        return (
            <div>
                <div className='listingCont'>
                    <h4>{this.props.ind + 1}</h4>
                    <h4>{this.props.userObj.username}</h4>
                    <h4>{this.props.userObj.quiz_points}%</h4>
                </div>
                <div className='listingChart'>
                    <ChartLeaderQuiz
                        points={this.props.userObj.quiz_points} />
                </div>
            </div>
        )
    }
}

export default LeaderListing;