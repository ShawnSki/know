import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
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
        console.log(this.state)
        return (
            <nav>
                <div>
                    <h1>NAVBAR</h1>
                </div>
                <div>
                    <form>
                        <input type='text' name='email' placeholder='email' onChange={this.handleLoginInfoUpdate} />
                        <input type='password' name='password' placeholder='password' onChange={this.handleLoginInfoUpdate} />
                        <button>LOGIN</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navbar;