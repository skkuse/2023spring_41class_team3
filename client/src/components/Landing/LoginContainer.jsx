import styled from 'styled-components';
import LoginButton from 'components/LoginButton';
import LogoutButton from 'components/LogoutButton';

const LoginWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

function LoginContainer({ user, handleLogout }) {
	return (
		<LoginWrapper>
			{user ? <LogoutButton handleLogout={handleLogout} /> : <LoginButton />}
		</LoginWrapper>
	);
}

export default LoginContainer;
