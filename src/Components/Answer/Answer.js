import React from "react";

class Answer extends React.Component {
    render() {
        return(
        <div className="answer-container">
            <p className="answer-statement">{this.props.questionStatement}</p>
            <p className="answers-and-time">10 hours ago by [USERNAME]</p>
            <hr/>
        </div>
        );
    }
}

export default Answer;