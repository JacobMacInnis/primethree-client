import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import About from './about';

class LandingPage extends Component {
  
  render() {
    return (
      <div className="landing-page">
        <Logo />
        <About />        
        <Link to="/homepage" className="links">
              New Input
        </Link>
      </div>
    );
  }
}

export default LandingPage;