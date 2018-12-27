import React from 'react';
import './styles/instructions.css';

export default function Instructions(props) {
  return (
    <div className="intructions">
      <h2 className='instructions-h2'>Find The Smallest Prime</h2>
      <h4
      className='instructions-h4'>Enter one number in each input and press Submit to find the smallest Prime number containing these numbers in order.</h4>
    </div>
  );
}