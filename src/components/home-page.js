import React from 'react';
import './styles/home-page.css';
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import logo from '../assets/primethree-logo.png';
import Results from './results';

export default function HomePage() {
  return (
    <div className="home-page">
      <Logo className='home-page-logo' name={'home-page-logo'} logo={logo} />
      <Link to="/inputpage" className="input-page-link">
            Search New Number
      </Link>
      <div className='results-title-container'>
        <h2>All Search Results</h2>
        <div className='results-title'>
          <h3 className='left-title'>Input</h3>
          <h3 className='right-title'>Found In</h3>
        </div>
      </div>
      <Results className='results'/>
    </div>
  );
}