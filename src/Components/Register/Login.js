import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Signup.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLoginInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdminLogin = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        axios.post('/auth/login', { email, password })
            .then((res) => {
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                console.log(err)
                window.alert('Incorrect email or password.');
            })
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='mainCont'>
                <div className='signupCont'>
                    <h1>Log in to account</h1>
                    <form onSubmit={this.handleAdminLogin}>
                        <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleLoginInfoUpdate} />
                        <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleLoginInfoUpdate} />
                        <button>Login</button> <br />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);