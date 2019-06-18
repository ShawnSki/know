import React, { Component } from 'react';
import axios from 'axios';
import { updateAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';
import Signup from './Signup';
// import Login from './Login';

class Register extends Component {
    

    componentDidMount() {
        axios.get('/auth/admin').then((res) => {
            this.props.updateAdmin(res.data)
            this.props.history.push('/dashboard')
        })
    }

    render() {
        return (
            <div>
                {/* <Login /> */}
                <Signup />
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(
    mapStateToProps,
    { updateAdmin }
)(Register)