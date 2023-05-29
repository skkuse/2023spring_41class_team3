import styled from 'styled-components';
import LoginButton from 'components/LoginButton';

const LoginWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

function LoginContainer() {
	return (
		<LoginWrapper>
			<LoginButton />
		</LoginWrapper>
	);
}

export default LoginContainer;
