import styled from 'styled-components';

const TITLE = 'Skills speak louder than words';
const DESCRIPTION1 = 'DevNAVI는 더 나은 소프트웨어를 위한 테크 교육을 지원합니다.';
const DESCRIPTION2 = 'DevNAVI를 통해 테크 능력을 향상시키고 더 나은 미래를 만들어가세요!';

const IntroWrapper = styled.div`
	justifycontent: center;
	alignitems: center;
`;

const Title = styled.h1`
	text-align: center;
	font-size: 64px;

	width: 40rem;
	margin: 5rem auto 2rem auto;
`;

const Description = styled.div`
	text-align: center;
	font-size: 20px;
	color: #55565b;
	width: 50rem;
	margin: 2rem auto;
	white-space: pre-wrap;
`;

function IntroContainerFirst() {
	return (
		<IntroWrapper>
			<Title>{TITLE}</Title>
			<Description>
				{DESCRIPTION1}
				<br />
				{DESCRIPTION2}
			</Description>
		</IntroWrapper>
	);
}

export default IntroContainerFirst;
