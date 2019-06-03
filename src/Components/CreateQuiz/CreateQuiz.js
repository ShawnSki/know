import React, { Component } from 'react';

class CreateQuiz extends Component {
    render() {
        return (
            <div>
                <h1>CreateQuiz</h1>
                <div>
                    <form>
                        <h2>Create New</h2>
                        <input type='text' name='title' placeholder='title' onChange={this.handleLoginInfoUpdate} />
                        <input type='text' name='introduction' placeholder='introduction' onChange={this.handleLoginInfoUpdate} />
                        <input type='text' name='backgroundImg' placeholder='background image url' onChange={this.handleLoginInfoUpdate} />
                        <button>Create Quiz</button> <br />
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateQuiz;