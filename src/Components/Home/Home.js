import React from 'react';
import './Home.css';
import Question from '../Question/Question';
import Navigation from '../Navigation/Navigation';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navigation />
        <div className="questions-box">   
          <div className="questions-box-header">
            <h2>Explore...</h2>
            <select>
              <option>most recently posted</option>
              <option>most answered</option>
              <option>least answered</option>
            </select>
          </div>
          <Question questionStatement="what happens at Tech Utsav?" />
          <Question questionStatement="How will i get OD?" />
          <Question questionStatement="What is a Tech stack?" />
          <Question questionStatement="Where can i get Bonafide?" />
          <Question questionStatement="How many days will be there in between semester exams?" />
          <Question questionStatement="what happens at Tech Utsav?" />
          <Question questionStatement="How will i get OD?" />
          <Question questionStatement="What is a Tech stack?" />
          <Question questionStatement="Where can i get Bonafide?" />
          <Question questionStatement="How many days will be there in between semester exams?" />
        </div>
      </div>

    );
  }
};

export default Home;