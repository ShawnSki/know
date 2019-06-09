import React, { Component } from 'react';
import axios from 'axios';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';
import './Account.css';

class Account extends Component {

    handleAdminLogout = () => {
        axios.get('/auth/logout').then((res) => {
            this.props.clearAdmin()
            this.props.history.push('/')
        })
    }


    render() {
        // console.log(this.props)
        return (
            <div className='accountMainCont'>
                <div className='accountCont'>
                    <h1>Account Information</h1>
                    <ul>
                        <li>First Name:  {this.props.firstname}</li>
                        <li>Last Name:  {this.props.lastname}</li>
                        <li>Email:  {this.props.email}</li>
                        <li>Company:  {this.props.company}</li>
                    </ul>
                    <br/>
                    <div className='acctBtnCont'><button onClick={this.handleAdminLogout}>Logout</button></div>
                </div>
            </div>

        )
    }
}


function mapStateToProps(reduxState) {
    const { firstname, lastname, email, company } = reduxState;
    return {
        firstname,
        lastname,
        email,
        company
    }
}

const mapDispatchToProps = {
    updateAdmin,
    clearAdmin
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account)