import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import bgImage from 'assets/images/background/landing-background.jpg';

import IntroContainerFirst from 'components/Landing/IntroContainerFirst';
import IntroContainerSecond from 'components/Landing/IntroContainerSecond';
import LogosContainer from 'components/Landing/LogosContainer';
import LoginContainer from 'components/Landing/LoginContainer';
import { useAuthenticate } from 'hooks/auth';

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;

	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const Content = styled.main`
	margin: 0 10%;
	display: flex;
	flex-direction: column;
`;

function LandingPage() {
	const authenticate = useAuthenticate();

	useEffect(() => {
		authenticate();
	}, []);

	return (
		<Wrapper>
			<Header />
			<Content>
				<IntroContainerFirst />
				<LoginContainer />
				<IntroContainerSecond />
				<LogosContainer />
			</Content>
			<Footer />
		</Wrapper>
	);
}

export default LandingPage;
