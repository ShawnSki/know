import React, { Component } from 'react';
import axios from 'axios';
import LeaderListing from '../LeaderListing/LeaderListing';
import './LeaderBoard.css';

class LeaderBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            creation_date: '',
            quiz_title: '',
            guiz_bg_img: '',
            quiz_survey1: '',
            survey1_options: ''
        }
    }

    componentDidMount() {
        this.handleGetQuizResults();
    }

    handleGetQuizResults = () => {
        axios.get(`/results/quiz/${this.props.match.params.id}`)
            .then(res => {
                const { creation_date, quiz_title, guiz_bg_img, quiz_survey1, survey1_options } = res.data[0]
                const newDate = creation_date.split('T')
                this.setState({
                    results: res.data,
                    creation_date: newDate[0],
                    quiz_title,
                    guiz_bg_img,
                    quiz_survey1,
                    survey1_options
                })
            })
    }



    render() {
        const { results, creation_date, quiz_title, guiz_bg_img, quiz_survey1, survey1_options } = this.state;
        const usersMapped = results.map((userObj, ind) => {
            return (
                <div className='alternateBg'>
                    <LeaderListing
                        key={ind}
                        userObj={userObj}
                        ind={ind} />
                </div>
            )
        })
        return (
            <div className='leaderPageCont'>
                <div className='leaderHeader'>
                    <h1>Results: {quiz_title}</h1>
                    <p>Created: {creation_date}</p>
                </div>
                <div className='leaderContHeader'>
                    <h2>Leaderboard</h2>
                    <p>Created: {creation_date}</p>
                </div>
                <div className='leaderList'>{usersMapped}</div>
            </div>
        )
    }
}

export default LeaderBoard;