import React from 'react';
import './Ask.css';

class Ask extends React.Component {
    render() {
        return (
            <div className="ask-box">
                <p className="ask-a-question">Ask a Question Here</p>
                <textarea className="question-asked" placeholder="?"/>
                <button className="post-button">Post</button>
            </div>
        );
    }
}


export default Ask;