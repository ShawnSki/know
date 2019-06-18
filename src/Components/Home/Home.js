import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='homeCont'>
            <div className='heroCont'>
                <h1>Know what THEY Know!</h1>
                <h2>Knowledge assessments with annalytics!</h2>
                <button>Action</button>
            </div>
            <div className='feature1Cont'>
                <div className='feature1ImgCont'>
                    <img src='https://yellingyak.com/wp-content/uploads/2019/06/knowwie_screen_charts.png' />
                </div>
                <div className='feature1Text'>
                    <h1>Annalytics With Meaning</h1>
                    <p>YNow we can begin working on lots of happy little things. Everybody's different. Trees are different. Let them all be individuals. I guess that would be considered a UFO. A big cotton ball in the sky. Let's do that again. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. You can bend rivers. But when I get home, the only thing I have power over is the garbage.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className='feature2Cont'>
                <div className='feature2Text'>
                    <h1>Customizable Questions</h1>
                    <p>YNow we can begin working on lots of happy little things. Everybody's different. Trees are different.</p>
                </div>
                <div className='feature2ImgCont'>
                    <img src='https://yellingyak.com/wp-content/uploads/2019/06/knowwie_screen_quiz.png' />
                </div>
            </div>
        </div>
    )
}

export default Home;