import React, { Component } from 'react';
import './styles/home-page.css';
import { Link } from 'react-router-dom';
import { Logo } from './logo';
import logo from '../assets/primethree-logo.png';
import Results from './results';

export default class InputPage extends Component {
  
  render() {
    return (
      <div className="home-page">
        <Logo className='logo' logo={logo} />
        <Link to="/inputpage" className="input-page-link">
              Search New Number
        </Link>
        <Results className='results' />
      </div>
    );
  }
}