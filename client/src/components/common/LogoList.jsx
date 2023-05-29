import React from 'react';

import skkuLogo from 'assets/images/logos/SKKU-logo.png';
import openAILogo from 'assets/images/logos/OpenAI-logo.png';
import Logo from './Logo';

const logos = [
	// add logos src here
	skkuLogo,
	openAILogo,
];

function LogoList() {
	return (
		<div>
			{logos.map((logo) => (
				<Logo style={{ display: 'flex' }} src={logo} />
			))}
		</div>
	);
}

export default LogoList;
