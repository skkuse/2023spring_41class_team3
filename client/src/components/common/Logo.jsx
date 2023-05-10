import React from 'react';

const logoStyle = {
	width: '100px',
	height: '100px',
	objectFit: 'contain',
	margin: '0 10px',
};

const Logo = ({ src }) => <img src={src} alt="logo" style={logoStyle} />;

export default Logo;
