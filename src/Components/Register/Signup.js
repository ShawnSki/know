import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import './Register.css';

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
            })
        e.target.email.value = ''
        e.target.password.value = ''
        e.target.firstname.value = ''
        e.target.lastname.value = ''
        e.target.company.value = ''
    }

    render() {
        return (
            <div className='mainCont'>
                <div className='signupCont'>
                    <form onSubmit={this.handleAdminRegister}>
                        <h1>Create an account</h1>
                        <p>Already have an account? <a href='/login'> Log in ></a></p>
                        <input type='text' name='email' placeholder='email' onChange={this.handleLoginInfoUpdate} />
                        <input type='password' name='password' placeholder='password' onChange={this.handleLoginInfoUpdate} />
                        <div className='inputCont'>
                            <input type='text' name='firstname' placeholder='first name' onChange={this.handleLoginInfoUpdate} />
                            <input type='text' name='lastname' placeholder='last name' onChange={this.handleLoginInfoUpdate} />
                        </div>
                        <input type='text' name='company' placeholder='company' onChange={this.handleLoginInfoUpdate} />
                        <button>Create Account</button> <br />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);