import React from 'react';
import './Question.css';
class Question extends React.Component{
  render(){
    return(
      <div className="question-container">
        <p className="question-statement">{this.props.questionStatement}</p>
        <p className="answers-and-time">5 answers . 10 hours ago</p>
        <hr/>
      </div>
    );
  }
}

export default Question;
