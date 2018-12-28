import React from 'react';
import './styles/logo.css';

export const Logo = props => (
	<img className={props.name}
		src={props.logo} alt='PrimeThree logo'/>
);
