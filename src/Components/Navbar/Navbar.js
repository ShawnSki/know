import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
   

    render() {
        console.log(this.state)
        return (
            <nav>
                <div>
                    <h1>NAVBAR</h1>
                </div>
                <div className='linksCont'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/register'>Login</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard-override'>DashOver</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;