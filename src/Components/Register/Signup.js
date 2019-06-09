import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            company: ''
        }
    }


    handleLoginInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdminRegister = (e) => {
        e.preventDefault();
        const { email, password, firstname, lastname, company } = this.state;
        axios.post('/auth/register', { email, password, firstname, lastname, company })
            .then((res) => {
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                console.log(err)
                window.alert('This email is already being used.');
            })
        this.setState({
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            company: ''
        })
    }

    render() {
        return (
            <div className='mainCont'>
                <div className='signupCont'>
                    <h1>Create an account</h1>
                    <p>Already have an account? <Link to='/login'>Log in</Link></p>
                    <form onSubmit={this.handleAdminRegister}>
                        <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleLoginInfoUpdate} />
                        <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleLoginInfoUpdate} />
                        <div className='inputCont'>
                            <input type='text' name='firstname' placeholder='first name' value={this.state.firstname} onChange={this.handleLoginInfoUpdate} />
                            <input type='text' name='lastname' placeholder='last name' value={this.state.lastname} onChange={this.handleLoginInfoUpdate} />
                        </div>
                        <input type='text' name='company' placeholder='company' value={this.state.company} onChange={this.handleLoginInfoUpdate} />
                        <button>Create Account</button> <br />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);