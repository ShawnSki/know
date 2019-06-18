import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='homeCont'>
            <div className='heroCont'>
                <div className='heroTextCont'>
                    <div>
                        <h1>know what</h1>
                        <span className='heroContBold'><h1>they</h1></span>
                        <h1>know!</h1>
                        <h2>Make better decisions through analytic based knowledge assessments.</h2>
                    </div>
                    <div className='heroBtns'>
                        <Link to='/dashboard'><button>Get Started</button></Link>
                        <div className='heroBtnAlt'><Link to='/quizlist'><button>See Example</button></Link></div>
                    </div>
                </div>

            </div>
            <div className='feature1Cont'>
                <div className='feature1ImgCont'>
                    <img src='https://yellingyak.com/wp-content/uploads/2019/06/knowwie_screen_charts.png' />
                </div>
                <div className='feature1Text'>
                    <h1>Decision-Making Annalytics</h1>
                    <p>YNow we can begin working on lots of happy little things. Everybody's different. Trees are different. Let them all be individuals. I guess that would be considered a UFO. A big cotton ball in the sky. Let's do that again. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. You can bend rivers. But when I get home, the only thing I have power over is the garbage.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className='feature2Cont'>
                <div className='feature2Text'>
                    <h1>Assessments With Purpose</h1>
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