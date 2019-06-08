import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='boxCont'>
            <div className='titleBeforeCont'><h1>Know what your [</h1></div>
            <div className='titleMiddleCont'>
                <div className='animateText'>
                    <h1>students</h1>
                    <h1>employees</h1>
                    <h1>team</h1>
                    <h1>people</h1>
                </div>
            </div>
            <div className='titleAfterCont'><h1>] Know</h1></div>
        </div>
    )
}

export default Home;