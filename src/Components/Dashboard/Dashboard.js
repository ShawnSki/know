import React, { Component } from 'react';
import axios from 'axios';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';
import CreateQuiz from '../CreateQuiz/CreateQuiz';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addQuiz: false
        }
    }

    componentDidMount() {
        axios.get('/auth/dashboard')
            .then((res) => {
                this.props.updateAdmin(res.data)
            })
            .catch((err) => {
                this.props.history.push('/register')
            })
    }

    handleAdminLogout = () => {
        axios.get('/auth/logout').then((res) => {
            this.props.clearAdmin()
            this.props.history.push('/')
        })
    }

    handleToggleAddQuiz = () => {
        this.setState({
            addQuiz: !this.state.addQuiz
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Dashboard</h1>
                <h3>{this.props.firstname}</h3>
                <h3>{this.props.lastname}</h3>
                <h3>{this.props.email}</h3>
                <h3>{this.props.company}</h3>
                <button onClick={this.handleAdminLogout}>Logout</button>
                <div className='dashCont'>
                    <div className='createQCont'>
                        {(this.state.addQuiz === false)
                            ? (
                                <div>
                                    <div>
                                        <h1>Create New Quiz</h1>
                                        <p>Click the button below to create a quiz.</p>
                                        <br />
                                        <button onClick={this.handleToggleAddQuiz}>Add New Quiz</button>
                                    </div>
                                    <div className='listCont'>
                                        <h1>Quiz List</h1>
                                        <ul>
                                            <li>Quiz Title here</li>
                                            <li>Quiz Title here</li>
                                            <li>Quiz Title here</li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <CreateQuiz handleToggleNewQuiz={this.handleToggleAddQuiz} />
                                </div>
                            )
                        }
                    </div>

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