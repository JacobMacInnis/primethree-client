import React from 'react';

export default function Input(props) {
  return (
    <label className="landing-page">
      {props.text} 
        <input 
          type='text' 
          name={props.name} 
          id={props.name} 
          defaultValue={props.current} 
          onChange={props.onChange}>
        </input>
    </label>
  );
}