import React from 'react';
import styled from 'styled-components';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import bgImage from 'assets/images/background/landing-background.jpg';
import MainContainerFirst from 'components/Main/MainContainerFirst';

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

function MainPage() {
	return (
		<Wrapper>
			<Header />
			<Content>
				<MainContainerFirst />
			</Content>
			<Footer />
		</Wrapper>
	);
}

export default MainPage;
