import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import Ask from './Components/Ask/Ask';

class App extends React.Component {
  constructor(props) {
    super(props);
    var q = [
      {
        "id": 1,
        "creation_date": "2021-03-09T18:30:00.000Z",
        "question_text": "sed augue aliquam erat volutpat in congue etiam justo etiam pretium?",
        "roll_number": 70010,
        "answer_count": 0
      }
    ]
    this.state = {
      questions: q
    }
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <Home questions={this.state.questions} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/ask">
          <Ask />
        </Route>
      </div>
    );
  }
}
export default App;
