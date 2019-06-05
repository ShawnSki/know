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
            addQuiz: false,
            quizzes: []
        }
    }

    componentDidMount() {
        this.handleGetAdmin();
        // this.handleGetQuizzes();
    }

    handleGetAdmin = async () => {
        await axios.get('/auth/dashboard')
            .then(res => this.props.updateAdmin(res.data))
            .catch((err) => {
                console.log(err)
            })
        if (!this.props.firstname) {
            this.props.history.push('/register')
            
        }
        this.handleGetQuizzes()
    }

    handleGetQuizzes = () => {
        axios.get(`/api/quizzes/${this.props.id}`)
            .then(res => {
                this.setState({
                    quizzes: res.data
                })
        })
    }

    handleToggleAddQuiz = () => {
        this.setState({
            addQuiz: !this.state.addQuiz
        })
    }

    render() {
        console.log(this.state.quizzes)
        return (
            <div className='dashPageCont'>
                <div className='dashHeader'><h1>{this.props.firstname}'s Dashboard</h1></div>
                <div className='dashCont'>
                    {(this.state.addQuiz === false)
                        ? (
                            <div className='quizCont'>
                                <div className='quizBtnCont'>
                                    <h1>Your Quizzes</h1>
                                    <p>Click the button below to create a quiz.</p>
                                    <br />
                                    <button onClick={this.handleToggleAddQuiz}>create new quiz</button>
                                </div>
                                <div>
                                    <br />
                                    <p>Quiz List component here</p>
                                    <ul>
                                        <li>Quiz Title hereQuiz Title hereQuiz Title here</li>
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
        )
    }
}
    
function mapStateToProps(reduxState) {
    const { id, firstname, lastname, email, company } = reduxState;
    return {
        id,
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