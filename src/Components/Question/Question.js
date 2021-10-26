import React from 'react';
import { Link } from 'react-router-dom';
import './Question.css';
import avatar from '../../images/avatar.svg';

class Question extends React.Component {
  render() {
    return (
      <div className="question-container">

        <Link to='/questionId'>
          <div className="question-statement">
            {this.props.questionStatement}
          </div>
        </Link>
        <div className="question-details">
          <div className="answers-and-time">5 answers . 10 hours ago</div>
          <div className="user">
            <img alt="avatar" src={avatar} />
            61236
          </div>
        </div>

      </div>
    );
  }
}

export default Question;