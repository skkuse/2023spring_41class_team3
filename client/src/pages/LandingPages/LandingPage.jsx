import React from 'react';
import styled from 'styled-components';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import bgImage from 'assets/images/background/landing-background.jpg';

import IntroContainerFirst from 'components/Landing/IntroContainerFirst';
import IntroContainerSecond from 'components/Landing/IntroContainerSecond';
import LogosContainer from 'components/Landing/LogosContainer';
import LoginContainer from 'components/Landing/LoginContainer';


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


function LandingPage ({ user, handleLogout }) {
    return (
        <Wrapper>
            <Header />
            <Content>
                <IntroContainerFirst/>
                <LoginContainer user={user} handleLogout={handleLogout} />
                <IntroContainerSecond/>
                <LogosContainer/>
            </Content>
            <Footer/>
        </Wrapper>
    );
};


export default LandingPage;
