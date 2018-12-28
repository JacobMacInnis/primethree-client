import React from 'react';
import './styles/about.css';

export default function About() {
  return (
    <div className="about">
      <h1 className='about-h1'>Welcome to Prime Three!</h1>
      <p className="about-p">Prime Three takes three digits as an input and searches within the first 10,000 prime numbers for the first prime number that contains the same digits in the same order.</p>
      <p className="about-p">ex. search 121 and get...</p>
      <p className="about-p">'121 first appears in the Prime Number 1213. It is the 197th Prime Number' </p>
    </div>
  );
}