import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import Ask from './Components/Ask/Ask';

class App extends React.Component{
  render(){
    return (
      <div className="app">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register"> 
          <Register/>
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/ask">
          <Ask/>
        </Route>
      </div>
    );
  }
}
export default App;
