import React from 'react';
import { Link } from 'react-router-dom';
import './NavDrawer.css';

const NavDrawer = (props) => {
    return (
        <nav className='navDrawerCont'>
            <ul onClick={props.handleDrawerToggle}>
                <li><Link to='/quizlist'>Knowwies</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/register'>Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default NavDrawer;