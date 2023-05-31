import styled from 'styled-components';

import bgImage from 'assets/images/imagesource/PSSelectPage_background.png';

const Container = styled.div`
	justifycontent: center;
	alignitems: center;
`;

const Body = styled.div`
	margin: 0px;
	width: cover;
	min-height: 53vh;
	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
`;

function PSListContainer() {
	return (
		<Container>
			<Body />
		</Container>
	);
}

export default PSListContainer;
