import React from 'react';
import './styles/logo.css';
// import logo from '../assets/primethree-logo.png';

export const Logo = props => (
	<img className='logo'
		src={props.logo} alt='PrimeThree logo'/>
);
