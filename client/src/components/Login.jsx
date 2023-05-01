import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Login = ({ handleLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Perform authentication logic here
    const userInfo = {
      username,
      password,
      firstName: 'John',
      lastName: 'Doe',
    };
    
    handleLoginSuccess(userInfo);
    navigate('/main');
  };
  
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Log In</LoginTitle>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          />
        <Button type="submit">Log In</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;



const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

const LoginTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 3px;
  border: 1px solid gray;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 3px;
  border: none;
  background-color: #4CAF50;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;