import React, { Component } from 'react';
import axios from 'axios';
import { updateAdmin, clearAdmin } from '../../redux/adminReducer';
import { connect } from 'react-redux';
import CreateQuiz from '../CreateQuiz/CreateQuiz';

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
                <div>
                    {(this.state.addQuiz === false)
                        ? (<div>
                            <button onClick={this.handleToggleAddQuiz}>Add New Quiz</button>
                        </div>) : (
                            <div>
                                <CreateQuiz handleToggleNewQuiz={this.handleToggleAddQuiz} />
                            </div>
                        )
                    }
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