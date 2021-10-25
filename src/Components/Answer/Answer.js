import React from 'react';
import './Answer.css';
import avatar from '../../images/avatar.svg';

class Answer extends React.Component {
    render() {
        var postedTime = new Date(this.props.answer.creation_date);
        var now = new Date();
        var time = Math.round((now - postedTime) / (1000 * 60 * 60));
        return (
            <div className="answer-container">
                <div className="answer-statement" >
                    {this.props.answer.answer_text}
                </div>
                <div className="answer-details">
                    <div className="answers-and-time">{time} hours ago</div>
                    <div className="user">
                        <img alt="avatar" src={avatar} />
                        {this.props.answer.roll_number}
                    </div>
                </div>
                <hr />
            </div >
        );
    }
}

export default Answer;