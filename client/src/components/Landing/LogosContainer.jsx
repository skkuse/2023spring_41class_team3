import LogoList from 'components/common/LogoList';
import styled from 'styled-components';

const LogosWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

function LogosContainer() {
	return (
		<LogosWrapper>
			<LogoList />
		</LogosWrapper>
	);
}

export default LogosContainer;
