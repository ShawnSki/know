import React, { Component } from 'react';
import axios from 'axios';

class CreateQuestion extends Component {
    constructor() {
        super()
        this.state = {
            question: '',
            answer: '',
            distractors: []
        }
    }

    render() {

        return (
            <div>
                <h2>Create a question</h2>
            </div>
        )
    }
}

export default CreateQuestion;