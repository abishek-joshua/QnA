import React from 'react';
import './Ask.css';
class Ask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            asked: false,
        }
    }

    onClickPost = () => {
        let question_text = document.getElementById('question-asked').value;
        fetch('http://localhost:3000/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question_text: question_text,
                roll_number: this.props.roll_number
            })
        })
            .then(res => res.json())
            .then(console.log)
        this.setState({ asked: true });
        alert("Question Posted")
    }

    render() {
        return (
            <div className="ask">
                <label for="question-asked">Ask a Question Here</label>
                <textarea id="question-asked" rows="10" cols="50" />
                <button onClick={this.onClickPost} className="submit-button">Post</button>
            </div>
        );
    }
}


export default Ask;