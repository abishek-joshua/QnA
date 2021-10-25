import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Question.css';
import avatar from '../../images/avatar.svg';

class Question extends React.Component {
  render() {
    var postedTime = new Date(this.props.question.creation_date);
    var now = new Date();
    var time = Math.round((now - postedTime) / (1000 * 60 * 60));
    return (
      <div className="question-container">
        <Link to={'/answers/' + this.props.question.id}>
          <div className="question-statement">
            {this.props.question.question_text}
          </div>
        </Link>
        <div className="question-details">
          <div className="answers-and-time">{this.props.question.answer_count} answers  . {time} hours ago</div>
          <div className="user">
            <img alt="avatar" src={avatar} />
            {this.props.question.roll_number}
          </div>
        </div>

      </div >
    );
  }
}

export default withRouter(Question);