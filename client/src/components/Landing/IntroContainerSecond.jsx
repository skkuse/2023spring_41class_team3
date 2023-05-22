import styled from 'styled-components';

const WORDS = '해당 웹 서비스는 SE 2023 Spring의 group 3 프로젝트입니다';

const IntroWrapper = styled.div`
	justifycontent: center;
	alignitems: center;
`;

const Description = styled.div`
	text-align: center;
	font-size: 20px;
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
