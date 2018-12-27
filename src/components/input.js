import React from 'react';
import './styles/input.css';

export default function Input(props) {
  return (
    <div className='input-container'>
      <label className="">
        {props.text} 
      </label>
      <input
        type='text' 
        name={props.name} 
        id={props.name} 
        value={props.current} 
        onChange={props.onChange}
        autoComplete="number" >
      </input>
    </div>
  );
}