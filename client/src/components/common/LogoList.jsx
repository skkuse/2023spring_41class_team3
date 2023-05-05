import React from 'react';
import Logo from './Logo';

import skkuLogo from "assets/images/logos/SKKU-logo.png";
import openAILogo from "assets/images/logos/OpenAI-logo.png";

const logos = [
    // add logos src here
    skkuLogo,
    openAILogo,
];

const logoListStyle = {
    display: "flex",
}

const LogoList = () => {
  return (
    <div>
        {logos.map((logo, index) => (
            <Logo style={logoListStyle} key={index} src={logo} />
        ))}
    </div>
  );
};

export default LogoList;
