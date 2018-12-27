import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PrimeInput from './prime-input.js';

class HomePage extends Component {
  
  render() {
    return (
      <div className="home-page">
        <Link to="/" className="links">
              Landing Page
        </Link>
        <h2>HomePage</h2>
        <PrimeInput />        
      </div>
    );
  }
}

export default HomePage;