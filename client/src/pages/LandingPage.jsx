import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import bgImage from 'assets/images/background/landing-background.jpg';

import IntroContainerFirst from 'components/landing/IntroContainerFirst';
import IntroContainerSecond from 'components/landing/IntroContainerSecond';
import LogosContainer from 'components/landing/LogosContainer';
import LoginContainer from 'components/landing/LoginContainer';
import { useAuthenticate } from 'hooks/auth';
import Spinner from 'components/common/spinner';

function LandingPage() {
	const [isLoaded, setIsLoaded] = useState(true);
	const authenticate = useAuthenticate();

	useEffect(() => {
		(async () => {
			await authenticate();
			setIsLoaded(false);
		})();
	}, []);

	return isLoaded ? (
		<Spinner />
	) : (
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
