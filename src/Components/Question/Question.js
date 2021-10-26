import React from 'react';
import { Link } from 'react-router-dom';
import './Question.css';
import avatar from '../../images/avatar.svg';

class Question extends React.Component {
  render() {
    var postedTime = new Date(this.props.question.creation_date);
    var now = new Date();
    var time = Math.round((now - postedTime) / 1000);
    var unit = 'seconds'
    if (time >= 60) {
      time = Math.round(time / 60);
      unit = 'minutes'
      if (time >= 60) {
        time = Math.round(time / 60);
        unit = 'hours'
        if (time >= 24) {
          time = Math.round(time / 24);
          unit = 'days'
        }
      }
    }
    return (
      <div className="question-container">
        <Link to='/answers'>
          <div className="question-statement" onClick={() => this.props.updateClickedQuestion(this.props.question)} >
            {this.props.question.question_text}
          </div>
        </Link>

        <div className="question-details">
          <div className="answers-and-time">{this.props.question.answer_count} answers  . {time} {unit} ago</div>
          <div className="user">
            <img alt="avatar" src={avatar} />
            {this.props.question.roll_number}
          </div>
        </div>
      </div >
    );
  }
}

export default Question;