import React from 'react';
import './Ask.css';
import Navigation from '../Navigation/Navigation';
class Ask extends React.Component {
    onClickPost = () => {
        let question_text = document.getElementById('question-asked').value;
        fetch('http://localhost:3000/ask', {
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question_text : question_text,
                roll_number : 70001
            })

        })
            .then(res => res.json())
            .then(console.log)
    }
    render() {
        return (
            <div className="ask">
                <Navigation />
                <div className="ask-box">
                    <label for="question-asked">Ask a Question Here</label>
                    <textarea id="question-asked" rows="10" cols="50" />
                    <button onClick = {this.onClickPost} className="submit-button">Post</button>
                </div>
            </div>
        );
    }
}


export default Ask;