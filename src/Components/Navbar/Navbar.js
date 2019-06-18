import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';
import DrawerToggleBtn from '../NavDrawer/DrawerToggleBtn';
import './Navbar.css';

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
                    {/* <Link to='/'><h1>home</h1></Link> */}
                    <Link to='/'><img src={'https://yellingyak.com/wp-content/uploads/2019/06/knowwie_logo.png'} alt='knowwie logo' /></Link>
                </div>
                <div className='linksCont'>
                    <ul>
                        <li><Link to='/quizlist'>Knowwies</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/login'>Log In</Link></li>
                        <li><Link to='/register'>Sign Up</Link></li>
                        <li><Link to='/account'>{this.props.firstname}</Link></li>
                    </ul>
                </div>
                <div className='drawerBtnCont'>
                    <DrawerToggleBtn handleDrawerToggle={this.props.handleDrawerToggle} />
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