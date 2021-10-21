import React from 'react';
import './Home.css';
import Question from '../Question/Question';
import Navigation from '../Navigation/Navigation';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navigation />
        <div className="feed">
          <div className="questions-box-header">
            <div className="explore">Explore...</div>
            <select>
              <option>most recently posted</option>
              <option>most answered</option>
              <option>least answered</option>
            </select>
          </div>
          <div className="questions-box">
            {this.props.questions.map((ele, ind) => <Question key={ind} question={ele} />)}
          </div>
        </div>
      </div>

    );
  }
};

export default Home;