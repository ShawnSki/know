import React, { Component } from 'react';
import './Register.css';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    }

    handleLoginInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className='mainCont'>
                <div className='signupCont'>
                    <form>
                        <h1>Create a FREE account</h1>
                        <p>Already have an account? Log in ></p>
                        <input type='text' name='email' placeholder='email' onChange={this.handleLoginInfoUpdate} />
                        <input type='password' name='password' placeholder='password' onChange={this.handleLoginInfoUpdate} />
                        <div className='inputCont'>
                            <input type='text' name='firstname' placeholder='firstname' onChange={this.handleLoginInfoUpdate} />
                            <input type='text' name='lastname' placeholder='lastname' onChange={this.handleLoginInfoUpdate} />
                        </div>
                        <input type='text' name='company' placeholder='company' onChange={this.handleLoginInfoUpdate} />
                        <button>LOGIN</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;