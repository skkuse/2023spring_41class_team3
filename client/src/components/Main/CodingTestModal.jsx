import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import startCodingTest from 'assets/images/imagesource/MainPage_StartCodingTest.png';

import FormControl from '@mui/material/FormControl';

const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 9999;
`;

const ModalWrap = styled.dialog`
	width: 30%;
	min-height: 45vh;
	background: center center / cover no-repeat rgb(255, 255, 255);
	border-radius: 30px;
	border: 2px solid rgb(217, 217, 217);
	position: absolute;
	top: 50%;
	left: 30%;
	transform: translate(-50%, -50%);
	cursor: default;
	display: block;
`;

const Contents = styled.div`
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto 36px auto;
	font-size: 25px;
	font-weight: 600;
	color: #3b3838;
	text-align: center;
`;

const DropDownBody = styled.div`
	width: 50%;
	margin: 16px auto 0px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 32px;
`;

const UpdateTime = styled.div`
	margin: 3% 2%;
	height: 2rem;
	border-radius: 10px;
	width: 96%;
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 30px;
	line-height: 3rem;
	vertical-align: middle;
	text-align: center;
`;

const StartCodingTestButton = styled.button`
	margin: 3% 2%;
	height: 3rem;
	width: 96%;
	background-image: url(${startCodingTest});
	background-repeat: no-repeat;
	background-size: 85%;
	background-position: center center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: inline-block;
`;

const DropDownWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	justify-content: space-evenly;
`;

const problemDiffMenu = [1, 2, 3, 4, 5];
const problemNumberMenu = [1, 2, 3, 4, 5];

function CodingTestModal({ close }) {
	const [diffselected, setDiffSelected] = useState(1);
	const [probnumselected, setProbNumSelected] = useState(1);
	const modalRef = React.useRef();

	const handleDropDownDiff = (e) => {
		setDiffSelected(e.value);
	};
	const handleDropDownProbNum = (e) => {
		setProbNumSelected(e.value);
	};

	const navigate = useNavigate();

	const handleStartCodingTest = () => {
		navigate('/test');
	};

	const handleOutsideClick = (e) => {
		if (!modalRef.current.contains(e.target)) {
			close();
		}
	};

	return (
		<Overlay onClick={handleOutsideClick}>
			<ModalWrap ref={modalRef}>
				<Contents>
					<Title>코딩 테스트 시뮬레이션</Title>
					<DropDownBody>
						<FormControl>
							<DropDownWrapper>
								<span>난이도</span>
								<Dropdown
									options={problemDiffMenu}
									onChange={handleDropDownDiff}
									value={`${diffselected} 단계`}
									placeholder="문제 난이도를 선택하세요"
								/>
							</DropDownWrapper>
						</FormControl>
						<FormControl>
							<DropDownWrapper>
								<span>문제 수</span>
								<Dropdown
									options={problemNumberMenu}
									onChange={handleDropDownProbNum}
									value={`${probnumselected} 개`}
									placeholder="문제 수를 선택하세요"
								/>
							</DropDownWrapper>
						</FormControl>
						<UpdateTime>
							예상 소요시간은{' '}
							<span style={{ color: '#0089ff' }}>
								{diffselected * probnumselected * 10}
							</span>
							분입니다
						</UpdateTime>
						<StartCodingTestButton onClick={handleStartCodingTest} />
					</DropDownBody>
				</Contents>
			</ModalWrap>
		</Overlay>
	);
}

export default CodingTestModal;
