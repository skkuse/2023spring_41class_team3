import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bgImage from "../assets/images/landing-background.jpg";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import githubLogo from "../assets/images/github-mark-white.png";

import LogoList from '../components/common/LogoList';


const LandingPage = ({ user, handleLogout }) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    function LoginButton() {
        const buttonStyle = {
            width: "20rem",
            backgroundColor: '#333',
            fontSize: "20px",
            fontWeight: "bold",
        }

        const iconStyle = {
            width: "20px",
            height: "20px",
            margin: "auto",        
        }

        return (
            <Button style={buttonStyle} onClick={handleLoginClick}>
            <img src={githubLogo} style={iconStyle} alt="github logo" /> Log in with GitHub
            </Button>
        );
    }

    return (
    <Wrapper>
        <Header />
        <Content>
            <IntroContainer>
                <Title>Skills speak louder than words</Title>
                <Description>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</Description>
            </IntroContainer>
            
            <LoginContainer>
                {user ? 
                (<LogoutButton onClick={handleLogout}>Logout</LogoutButton>) 
                : <LoginButton/>}
            </LoginContainer>

            <IntroContainer>
                <Description>This is group 3's project in Introduciton to SE 2023 Spring</Description>
            </IntroContainer>

            <LogosContainer>
                <LogoList/>
            </LogosContainer>
        </Content>
        <Footer/>
    </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    // margin-top: -10px;
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

const IntroContainer = styled.div` 
    justifyContent: center;
    alignItems: center;
`;

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const LogosContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;


const Button = styled.button`
    font-size: 16px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
`;


const LogoutButton = styled(Button)`
    background-color: #dc3545;
`;


const Title = styled.h1`
    text-align: center;
    font-size: 64px;
    
    width: 40rem;
    margin: 5rem auto 2rem auto;
`;


const Description = styled.div`
    text-align: center;
    font-size: 24px;
    color: #55565B;
    width: 50rem;
    margin: 2rem auto;
`;


export default LandingPage;
