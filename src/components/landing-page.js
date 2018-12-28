import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import logo from '../assets/primethree-logo.png';
import About from './about';

class LandingPage extends Component {
  
  render() {
    return (
      <div className="landing-page">
        <div className='landing-page-logo'>      
          <Logo logo={logo} name={'landing-page-logo'}/>
        </div>
        <About className='about' />        
        <Link to="/inputpage" className="input-page-link">
              New Input
        </Link>
      </div>
    );
  }
}

export default LandingPage;