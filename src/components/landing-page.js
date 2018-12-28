import React from 'react';
import './styles/landing-page.css';
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import logo from '../assets/primethree-logo.png';
import About from './about';

export default function LandingPage() {
    return (
      <div className="landing-page">
        <Logo logo={logo} name={'landing-page-logo'}/>
        <About className='about' />        
        <Link to="/inputpage" className='input-link'>
              New Input
        </Link>
        <Link to='/homepage' className='results-page-link'>
              See All Results
        </Link>
      </div>
    );
  }
