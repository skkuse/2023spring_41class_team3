import styled from 'styled-components';
import mainbgImage from 'assets/images/imagesource/MainPage_background.png';
import PSmodebutton from 'assets/images/imagesource/MainPage_PSModeButton.png';
import CTmodebutton from 'assets/images/imagesource/MainPage_CodingTestButton.png';

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
	font-size: 1rem;
	font-weight: bold;
	color: #55565b;
	width: cover;
	margin: 1.5rem 0.5rem;
	white-space: normal;
`;

const Body = styled.div`
	margin: 40px 15px;
	width: cover;
	min-height: 45vh;
	background-image: url(${mainbgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 50px;
`;

const SelectMode = styled.div`
	line-height=100%;
	text-align: center;
	padding-top: 1rem;
	font-size: 2.3rem;
	font-weight: bold;
	color: #55565b;
	width: cover;
	height: 40%;
`;

const ButtonContainer = styled.div`
	width: 100%;
	min-height: 45vh;
	text-align: center;
`;

const PSModeButton = styled.button`
	margin: 2rem;
	width: 40%;
	min-height: 45vh;
	background-image: url(${PSmodebutton});
	background-repeat: no-repeat;
	background-size: 70%;
	background-position: center center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: inline-block;
`;
const CTModeButton = styled.button`
	margin: 2rem;
	width: 40%;
	min-height: 45vh;
	background-image: url(${CTmodebutton});
	background-repeat: no-repeat;
	background-size: 70%;
	background-position: center center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: inline-block;
`;

function MainContainerFirst() {
	return (
		<IntroWrapper>
			<Description>
				{DESCRIPTION1}
				<br />
				{DESCRIPTION2}
			</Description>
			<Body>
				<SelectMode>SELECT MODE</SelectMode>
				{/* <PSModeButton /> */}
				<ButtonContainer>
					<PSModeButton />
					<CTModeButton />
				</ButtonContainer>
			</Body>
		</IntroWrapper>
	);
}

export default MainContainerFirst;
