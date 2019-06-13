import React from 'react';
import './LeaderListing.css';

const LeaderListing = (props) => {
    console.log('props', props)
        return (
            <div className='listingCont'>
                <h4>{props.ind+1}</h4>
                <h4>{props.userObj.username}</h4>
                <h4>{props.userObj.quiz_points}%</h4>
            </div>
        )
}

export default LeaderListing;