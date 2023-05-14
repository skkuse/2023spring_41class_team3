import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import githubLogo from 'assets/images/logos/github-mark-white.png';

const LOGIN_MSG = 'Log in with GitHub';

const ButtonWrapper = styled.button`
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;

	width: 20rem;
	background-color: #333;
	font-size: 20px;
	font-weight: bold;
`;

const GithubLogo = styled.img`
	width: 20px;
	height: 20px;
	margin: auto 10px;
`;

function LoginButton() {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate('/login');
	};

	return (
		<ButtonWrapper onClick={handleLoginClick}>
			<GithubLogo src={githubLogo} alt="github logo" />
			{LOGIN_MSG}
		</ButtonWrapper>
	);
}

export default LoginButton;
