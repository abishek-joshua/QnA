import React from 'react';
import './App.css';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import Home from './Components/Home/Home';
import { Route, Redirect } from 'react-router';

const initialState = {
  isSignedin: false,
  roll_number: null
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);
  }

  login = (loggedRollNumber) => {
    this.setState({ roll_number: loggedRollNumber, isSignedin: true });
  }

  logout = () => {
    this.setState(prevState => Object.assign({}, initialState))
  }

  render() {
    return (
      <div className="app">

        <Route path="/signin">
          <Signin login={this.login} />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/">
          {this.state.isSignedin ?
            <Home logout={this.logout} roll_number={this.state.roll_number} /> :
            <Redirect to="/signin" />
          }
        </Route>

      </div>
    );
  }
}
export default App;
