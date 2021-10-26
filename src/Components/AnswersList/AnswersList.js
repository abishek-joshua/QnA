import React from 'react';
import './AnswersList.css'
import Answer from '../Answer/Answer';
import avatar from '../../images/avatar.svg';

class AnswersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: []
        }
    }

    onClickPost = () => {
        var answer_text = document.getElementById('answer-posted').value;
        console.log(this.props.roll_number);

        fetch('http://localhost:3000/post-answer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll_number: this.props.roll_number,
                question_id: this.props.question.id,
                answer_text: answer_text
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res === 'success') {
                    this.fetchAnswers();
                }
                else
                    throw new Error("error posting answer");
            })
            .catch(err => console.error(err))
    }

    fetchAnswers = () => {
        document.getElementById('answer-posted').value = '';
        fetch('http://localhost:3000/answers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question_id: this.props.question.id
            })
        })
            .then(res => res.json())
            .then(res => this.setState({ answers: res }));
    }
    componentDidMount() {
        this.fetchAnswers();
    }

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
            <div className="answers-list">

                <div className="question-wrap">
                    <div className="question-main">
                        {this.props.question.question_text}
                    </div>
                    <div className="question-footer">
                        <div className="answers-and-time"> {time} {unit} ago</div>
                        <div className="user">
                            <img alt="avatar" src={avatar} />
                            {this.props.question.roll_number}
                        </div>
                    </div>
                </div>

                <div className="answers-box">
                    {this.state.answers.map((ele, ind) => <Answer key={ind} answer={ele} />)}
                </div>

                <div className="answer">
                    <textarea id="answer-posted" rows="10" cols="50" placeholder="Type your answer here..." />
                    <button onClick={this.onClickPost} className="submit-button">Post</button>
                </div>

            </div >
        );
    }
};

export default AnswersList;