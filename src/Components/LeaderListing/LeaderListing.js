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
            <div className='listingHolder'>
                <div className='listingCont'>
                    <div className='rankTitle'>
                        <h2>{this.props.ind + 1}</h2>
                        <h2>: {this.props.userObj.username}</h2>
                    </div>
                    
                    <h2>{this.props.userObj.quiz_points}%</h2>
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