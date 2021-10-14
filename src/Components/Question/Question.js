import React from 'react';
import './Question.css';
class Question extends React.Component {
  render() {
    return (
      <div className="question-container">
        <div className="question-statement">
          {this.props.questionStatement}
        </div>
        <p className="answers-and-time">5 answers . 10 hours ago</p>
      </div>
    );
  }
}

export default Question;