import React from 'react';
import './Ask.css';
import Navigation from '../Navigation/Navigation';
class Ask extends React.Component {
    render() {
        return (
            <div className="ask">
                <Navigation />
                <div className="ask-box">
                    <label for="question-asked">Ask a Question Here</label>
                    <textarea id="question-asked" rows="10" cols="50" />
                    <button className="submit-button">Post</button>
                </div>
            </div>
        );
    }
}


export default Ask;