import styled from 'styled-components';
import mainbgImage from 'assets/images/imagesource/MainPage_background.png';
import PSmodebutton from 'assets/images/imagesource/MainPage_PSModeButton.png';

const DESCRIPTION1 = 'DevNavi는 코딩 연습과 코딩 테스트 시뮬레이션을 제공하는 웹페이지입니다.';
const DESCRIPTION2 =
	'DevNavi와 함께 여러분의 코딩 실력을 향상시키고 개발자로의 꿈에 한발자국 더 다가가세요!';

const IntroWrapper = styled.div`
	justifycontent: center;
	alignitems: center;
`;

const Description = styled.div`
	line-height=100%;
	text-align: center;
	font-size: 15px;
	font-weight: bold;
	color: #55565b;
	width: 50rem;
	margin: 2rem auto;
`;

const Body = styled.div`
	margin: 20px 50px;
	width: cover;
	min-height: 70vh;
	background-image: url(${mainbgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 50px;
`;

const PSModeButton = styled.div`
	margin: 10px;
	width: 50%;
	min-height: 70vh;

	background-image: url(${PSmodebutton});
	background-repeat: no-repeat;
	background-size: 50% 50%;
	background-position: center center;
	border-radius: 50px;
`;

function MainContainerFirst() {
	return (
		<IntroWrapper>
			<Description>
				{DESCRIPTION1}
				{DESCRIPTION2}
			</Description>
			<Body>
				<PSModeButton />
			</Body>
		</IntroWrapper>
	);
}

export default MainContainerFirst;
