import styled from 'styled-components';

const WORDS = "This is group 3's project in Introduciton to SE 2023 Spring";

const IntroWrapper = styled.div`
	justifycontent: center;
	alignitems: center;
`;

const Description = styled.div`
	text-align: center;
	font-size: 24px;
	color: #55565b;
	width: 50rem;
	margin: 2rem auto;
`;

function IntroContainerSecond() {
	return (
		<IntroWrapper>
			<Description>{WORDS}</Description>
		</IntroWrapper>
	);
}

export default IntroContainerSecond;
