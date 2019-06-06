import React, { Component } from 'react';
// import axios from 'axios';
import '../QuestionItem/QuestionItem.css';

class questionItem extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    

    render() {
        // console.log(this.props.questionObj)
        return (
            <div className='questionItemCont'>
                <h4>{this.props.questionObj.question}</h4>
                <div className='questionItembtnCont'>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        )
    }
}

export default questionItem;