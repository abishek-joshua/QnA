import React from 'react';
import './App.css';
import Question from './Components/Question/Question';
import Ask from './Components/Ask/Ask';
class App extends React.Component{
  render(){
    return(
      <div className="app">
        <h1><strong>Under Construction.....</strong></h1>
        <h1 className="qna-title">QnA</h1>

        <div className="questions-box">

          <div className="questions-box-header">
            <span className="explore">Explore..</span>
            <select className="sort-by">
              <option>most recently posted</option>
              <option>most answered</option>
            </select>
          </div>
          
        <Question questionStatement="what is why?"/>
        <Question questionStatement="why there are 7 days in a week?"/>
        <Question questionStatement="What is a Tech stack?"/>
        <Question questionStatement="Is javascript a language?"/>
        <Question questionStatement="when is the event?"/>

        </div>

        <Ask/>
      </div>
    );
  }
}
export default App;
