import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';
import './Navbar.css';
// var imgLogo = require('../../images/knowwie_logo.png');

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            loggedToggle: false
        }
    }

    render() {
        return (
            <nav>
                <div>
                <Link to='/'><h1>home</h1></Link>
                {/* <Link to='/'><img src={imgLogo} alt='knowwie logo' /></Link> */}
                </div>
                <div className='linksCont'>
                    <ul>
                        {/* <li><Link to='/'>Home</Link></li> */}
                        <li><Link to='/quizlist'>Quizzes</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/login'>Log In</Link></li>
                        <li><Link to='/register'>Sign Up</Link></li>
                        <li><Link to='/account'>{this.props.firstname}</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(reduxState) {
    const { firstname } = reduxState;
    return {
        firstname
    }
}

const mapDispatchToProps = {
    updateAdmin,
    clearAdmin
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)