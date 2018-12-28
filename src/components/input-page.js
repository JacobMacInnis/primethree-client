import React from 'react';
import './styles/input-page.css';
import { Logo } from './logo';
import logo from '../assets/primethree-logo-grey.png';
import Instructions from './instructions';
import PrimeInput from './prime-input.js';

export default function InputPage() {
  return (
    <div className="input-page">
      <Logo className='logo' name={'input-page-logo'} logo={logo} />
      <Instructions className='instructions'/>
      <PrimeInput className='input'/>
    </div>
  );
}