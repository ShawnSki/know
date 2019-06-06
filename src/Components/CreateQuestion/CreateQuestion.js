import React from 'react';

const CreateQuestion = props => (
    <div>
        <h2>{props.quiz_title}</h2>
        <p>Next, add questions</p>
        {(props.questionInitialized === false)
            ? (
                <div>
                    <form onSubmit={props.handleAddQuestion}>
                        <div className='creatorFormItems'><h4>Question:</h4><input type='text' name='question' placeholder='question' onChange={props.handleInfoUpdate} /></div>
                        <div className='creatorFormItems'><h4>Remediation:</h4><input type='text' name='remediation' placeholder='remediation' onChange={props.handleInfoUpdate} /></div>
                        <div className='creatorFormItems'><h4>Answer:</h4><input type='text' name='answer' placeholder='answer' onChange={props.handleInfoUpdate} /></div>
                        <div className='creatorFormItems'><h4>Distractor1:</h4><input type='text' name='distractor1' placeholder='distractor1' onChange={props.handleInfoUpdate} /></div>
                        <div className='creatorFormItems'><h4>Distractor2:</h4><input type='text' name='distractor2' placeholder='distractor2' onChange={props.handleInfoUpdate} /></div>
                        <div className='creatorFormItems'><h4>Distractor3:</h4><input type='text' name='distractor3' placeholder='distractor3' onChange={props.handleInfoUpdate} /></div>
                        <button>Next</button> <br />
                    </form>
                </div>
            ) : (
                <div>
                    <button onClick={props.handleQuestionAddedToggle}>add another question</button>
                </div>
            )}
            <div>
                <h2>question list here (component)</h2>
            </div>
        
    </div>
)

export default CreateQuestion;