import React, { Component } from 'react';
import axios from 'axios';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';

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
            <div>
                <h1>Account</h1>
                <p>Name: {this.props.firstname} {this.props.lastname}</p>
                <p>Email: {this.props.email}</p>
                <p>Company: {this.props.company}</p>
                <button onClick={this.handleAdminLogout}>Logout</button>
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