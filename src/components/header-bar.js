import React, { Component } from 'react';
import './styles/header-bar.css';
import logo from '../assets/primethree-logo.png';
export class HeaderBar extends Component {
  
	render() {
		return (
			<div className="header-bar">
				<img className='logo-container'
				src={logo} alt='header-logo' />
			</div>
		);
	}
}

export default HeaderBar;