import React, { Component } from 'react';
import axios from 'axios';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';

class Dashboard extends Component {

    componentDidMount() {
        axios.get('/auth/dashboard')
            .then((res) => {
                this.props.updateAdmin(res.data)
            })
            .catch((err) => {
                this.props.history.push('/auth/register')
            })
    }

    handleAdminLogout = () => {
        axios.get('/auth/logout').then((res) => {
            this.props.clearAdmin()
            this.props.history.push('/')
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Dashboard</h1>
                <h3>{this.props.firstname}</h3>
                <h3>{this.props.lastname}</h3>
                <h3>{this.props.email}</h3>
                <h3>{this.props.company}</h3>
                <button onClick={this.handleAdminLogout}>Logout</button>
                <div>
                    <h2>Create New Quiz</h2>
                </div>
                <div>
                    <h2>Your Quizzes</h2>
                    <ul>
                        <li>Your Quiz Title Here (btns: edit, delete)</li>
                        <li>Your Quiz Title Here (btns: edit, delete)</li>
                        <li>Your Quiz Title Here (btns: edit, delete)</li>
                        <li>Your Quiz Title Here (btns: edit, delete)</li>
                        <li>Your Quiz Title Here (btns: edit, delete)</li>
                        <li>Your Quiz Title Here (btns: edit, delete)</li>
                    </ul>
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
)(Dashboard)