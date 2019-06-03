import React, { Component } from 'react';

class CreateQuiz extends Component {
    render() {
        return (
            <div>
                <h1>Create Quiz</h1>
                <div>
                    <form>
                        <h2>Create New</h2>
                        <input type='text' name='title' placeholder='title' onChange={this.handleLoginInfoUpdate} />
                        <input type='text' name='introduction' placeholder='introduction' onChange={this.handleLoginInfoUpdate} />
                        <input type='text' name='backgroundImg' placeholder='background image url' onChange={this.handleLoginInfoUpdate} />
                        <button>Create Quiz</button> <br />
                    </form>
                </div>
                <button onClick={this.props.handleToggleNewQuiz}>JK nevermind</button>
            </div>
        )
    }
}

export default CreateQuiz;