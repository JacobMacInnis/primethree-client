import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  
  render() {
    return (
      <div className="landing-page">
        <Link to="/homepage" className="links">
              New Input
        </Link>
        <h2>Landing</h2>        
      </div>
    );
  }
}

export default LandingPage;