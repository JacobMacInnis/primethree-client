import React from 'react';
import './styles/results.css';
import Results from './results';

export const ResultsContainer = props => (
  <div className='results-container'>
    {/* <div>
      <h2>All Search Results</h2>
      <div className='results-title'>
        <h3 className='left-title'>Input</h3>
        <h3 className='right-title'>Found In</h3>
      </div>
    </div> */}
    <Results />
  </div>
);