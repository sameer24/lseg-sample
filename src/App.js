import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
//import NavBar from "./components/Navbar";
import HomePage from "./components/Home"
import LoginPage from "./components/Loginpage"
import GridAG from './components/Gridag'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">

          <Route path="/" exact render={() => (
            <div>
              <LoginPage />
            </div>
          )} />
          <Route path="/home" render={({ match }) => (
            <HomePage />
          )} />
          <Route path="/gridag" render={({ match }) => (
            <GridAG />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
