import React, { Component } from 'react';
import './styles/home-page.css';
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import Instructions from './instructions';
import PrimeInput from './prime-input.js';
import Results from './results';

class HomePage extends Component {
  
  render() {
    return (
      <div className="home-page">
        {/* <Link to="/" className="links">
              Landing Page
        </Link> */}
        <Logo className='logo' />
        <Instructions className='instructions'/>
        <PrimeInput className='input'/>
        <Results className='results'/>        
      </div>
    );
  }
}

export default HomePage;