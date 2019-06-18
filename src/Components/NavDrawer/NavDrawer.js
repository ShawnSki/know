import React from 'react';
import { Link } from 'react-router-dom';
import './NavDrawer.css';

const NavDrawer = (props) => {
    return (
        <nav className='navDrawerCont'>
            <ul onClick={props.handleDrawerToggle}>
                <Link to='/quizlist'><li>Knowwies</li></Link>
                <Link to='/dashboard'><li>Dashboard</li></Link>
                <Link to='/login'><li>Log In</li></Link>
                <Link to='/register'><li>Sign Up</li></Link>
            </ul>
        </nav>
    )
}

export default NavDrawer;