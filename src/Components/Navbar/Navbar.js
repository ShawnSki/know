import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            loggedToggle: false
        }
    }
    // componentDidMount = () => {
    //     console.log('here')
    //     if (this.props.firstname)
    //         this.handleLoggedToggle();
    // }
    // maybe try adding toggle function to App and passing it down????

    handleLoggedToggle = () => {
        this.setState({
            loggedToggle: !this.state.loggedToggle
        })
    }

    render() {
        return (
            <nav>
                <div>
                    <h1>NAVBAR</h1>
                </div>
                <div className='linksCont'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/register'>Sign Up</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/login'>Log In</Link></li>
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