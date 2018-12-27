import React from 'react';

export default function Input(props) {
  return (
    <label className="landing-page">
      {props.text} 
        <input 
          type='text' 
          name={props.name} 
          id={props.name} 
          value={props.current} 
          onChange={props.onChange}
          autoComplete="number" >
        </input>
    </label>
  );
}