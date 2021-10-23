import React from 'react';
import './QuestionsList.css'
import Question from '../Question/Question';

class QuestionsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        this.fetchQuestions();
    }

    fetchQuestions = () => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ questions: res }
                )
            })
    }

    render() {
        return (
            <div className="questions-list">
                <div className="questions-box-header">
                    <div className="explore">Explore...</div>
                    <select>
                        <option>most recently posted</option>
                        <option>most answered</option>
                        <option>least answered</option>
                    </select>
                </div>
                <div className="questions-box">
                    {this.state.questions.map((ele, ind) => <Question key={ind} question={ele} />)}
                </div>
            </div>
        );
    }
};

export default QuestionsList;