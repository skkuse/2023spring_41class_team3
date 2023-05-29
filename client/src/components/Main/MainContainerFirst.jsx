import React, { useState } from 'react';

import styled from 'styled-components';
import CTmodebutton from 'assets/images/imagesource/MainPage_CodingTestButton.png';
import MODAL from 'components/Main/CodingTestModal';

const DESCRIPTION1 = 'DevNAVI는 코딩 연습과 코딩 테스트 시뮬레이션을 제공하는 웹서비스입니다.';
const DESCRIPTION2 =
	'DevNAVI와 함께 여러분의 코딩 실력을 향상시키고 개발자로의 꿈에 한발자국 더 다가가세요!';

const IntroWrapper = styled.div`
	justify-content: center;
	align-items: center;
`;

const Description = styled.div`
	line-height: 100%;
	text-align: center;
	font-size: 1.1rem;
	font-weight: bold;
	color: #3b3838;
	width: cover;
	margin: 1.5rem;
	white-space: normal;
`;

const Body = styled.div`
	margin: 20px 15px 30px 15px;
	width: cover;
	min-height: 45vh;
	border-radius: 60px;
`;

// const SelectMode = styled.div`
// 	line-height=100%;
// 	text-align: center;
// 	padding-top: 1rem;
// 	font-size: 2.5rem;
// 	font-weight: 600;
// 	color: #3B3838;
// 	width: cover;
// 	height: 40%;
// `;

const ButtonContainer = styled.div`
	width: 100%;
	min-height: 45vh;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CTModeButton = styled.button`
	width: 300px;
	height: 300px;
	background-image: url(${CTmodebutton});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: inline-block;
`;

function MainContainerFirst() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleOpenModal = () => {
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	return (
		<IntroWrapper>
			<Description>
				{DESCRIPTION1}
				<br />
				{DESCRIPTION2}
			</Description>
			<Body>
				<ButtonContainer>
					<CTModeButton onClick={handleOpenModal} />
					{isOpenModal && <MODAL close={handleCloseModal} />}
				</ButtonContainer>
			</Body>
		</IntroWrapper>
	);
}

export default MainContainerFirst;
