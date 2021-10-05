import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';

ReactDOM.render(
  <React.StrictMode>
  <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

