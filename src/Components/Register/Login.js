import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
            })
        e.target.email.value = ''
        e.target.password.value = ''
    }

    render() {
        return (
            <div className='mainCont'>
                <div className='signupCont'>
                    <form onSubmit={this.handleAdminLogin}>
                        <h1>login to account</h1>
                        <input type='text' name='email' placeholder='email' onChange={this.handleLoginInfoUpdate} />
                        <input type='password' name='password' placeholder='password' onChange={this.handleLoginInfoUpdate} />
                        <button>Login</button> <br/>
                        </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);