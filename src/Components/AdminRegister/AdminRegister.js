import React, { Component } from 'react';

class AdminLogin extends Component {
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
    render() {
        return (
            <div>
                <div>
                    <h1>Register for an account</h1>
                    <div>
                        <form>
                            <input type='text' name='email' placeholder='email' onChange={this.handleLoginInfoUpdate} />
                            <input type='password' name='password' placeholder='password' onChange={this.handleLoginInfoUpdate} />
                            <button>LOGIN</button>
                        </form>
                    </div>
                </div>
                <div>
                    <h1>Admin Login</h1>
                    <div>
                        <form>
                            <input type='text' name='email' placeholder='email' onChange={this.handleLoginInfoUpdate} />
                            <input type='password' name='password' placeholder='password' onChange={this.handleLoginInfoUpdate} />
                            <button>LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLogin;