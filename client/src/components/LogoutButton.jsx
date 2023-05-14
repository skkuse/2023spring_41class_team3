import styled from 'styled-components';

const LOGOUT_MSG = 'Logout';

const ButtonWrapper = styled.button`
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;

	width: 10rem;
	font-size: 16px;
	font-weight: bold;
	background-color: #dc3545;
`;

function LogoutButton({ handleLogout }) {
	return <ButtonWrapper onClick={handleLogout}>{LOGOUT_MSG}</ButtonWrapper>;
}

export default LogoutButton;
