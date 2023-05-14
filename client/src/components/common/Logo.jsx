import React from 'react';

const logoStyle = {
	width: '100px',
	height: '100px',
	objectFit: 'contain',
	margin: '0 10px',
};

function Logo({ src }) {
	return <img src={src} alt="logo" style={logoStyle} />;
}

export default Logo;
