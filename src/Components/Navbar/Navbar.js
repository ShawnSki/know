import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';
import './Navbar.css';

class Navbar extends Component {


    render() {
        return (
            <nav>
                <div>
                    <h1>NAVBAR</h1>
                </div>
                <div className='linksCont'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/register'>Signup</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    </ul>
                    
                </div>
                <div>
                <p>Account: {this.props.firstname}</p>
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