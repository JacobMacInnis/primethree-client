import React, { Component } from 'react';
import './App.css';
import {Route, withRouter } from 'react-router-dom';
import LandingPage from './components/landing-page';
import InputPage from './components/input-page';
import HomePage from './components/home-page';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact 
        path='/inputpage' component={InputPage} />
        <Route exact 
        path='/homepage' component={HomePage} />
      </div>
    );
  }
}

export default withRouter(App);
