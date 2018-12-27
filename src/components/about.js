import React from 'react';
import './styles/about.css';

export default function About() {
  return (
    <div className="about">
      <h1 className='about-h1'>Welcome to Prime Three!</h1>
      <p className="about-p">Prime Three is an app that can take three digits and finds the first prime number that contains the same digits in the same order.</p>
    </div>
  );
}