import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import mainbgImage from 'assets/images/imagesource/MainPage_background.png';
import startCodingTest from 'assets/images/imagesource/MainPage_StartCodingTest.png';

import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { InputLabel } from '@mui/material';

const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
`;

const ModalWrap = styled.div`
	width: 50%;
	min-height: 45vh;
	background-image: url(${mainbgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-radius: 60px;
	position: absolute;
	top: 58%;
	left: 50%;
	transform: translate(-50%, -50%);
	justify-content: center;
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
	margin: 0 auto;
	font-size: 25px;
	font-weight: 600;
	margin-bottom: 30px;
	color: #3b3838;
	text-align: center;
`;

const DropDownBody = styled.div`
	width: 50%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const UpdateTime = styled.div`
	background-color: #d9d9d9;
	margin: 3% 2%;
	height: 3rem;
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

const DIFF_DATA = [
	{ id: '0', diff: '난이도를 선택하세요' },
	{ id: '1', diff: '1(매우 쉬움)' },
	{ id: '2', diff: '2(조금 쉬움)' },
	{ id: '3', diff: '3(중간)' },
	{ id: '4', diff: '4(조금 어려움)' },
	{ id: '5', diff: '5(매우 어려움)' },
];

const PROBNUM_DATA = [
	{ id: '0', num: '문제 수를 선택하세요' },
	{ id: '1', num: '1개' },
	{ id: '2', num: '2개' },
	{ id: '3', num: '3개' },
	{ id: '4', num: '4개' },
	{ id: '5', num: '5개' },
];

function CodingTestModal() {
	const [diffselected, setDiffSelected] = useState('난이도를 선택하세요');
	const [probnumselected, setProbNumSelected] = useState('문제 수를 선택하세요');

	const handleDropDownDiff = (e) => {
		setDiffSelected(e.target.value);
	};
	const handleDropDownProbNum = (e) => {
		setProbNumSelected(e.target.value);
	};

	const navigate = useNavigate();

	const handleStartCodingTest = () => {
		navigate('/login');
		// navigate('/test');
	};

	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<Title>
						코딩 테스트 시뮬레이션
						<br />
						Setting
					</Title>
					<DropDownBody>
						<FormControl>
							<InputLabel>난이도</InputLabel>
							<NativeSelect
								onChange={handleDropDownDiff}
								inputProps={{
									name: 'diff',
									id: 'uncontrolled-native',
								}}
								style={{
									backgroundColor: '#FFFFFF',
									margin: '3% 2%',
									height: '3rem',
									borderRadius: '10px',
									width: '96%',
									fontSize: '20px',
									fontWeight: '400',
									textAlignLast: 'center',
								}}
							>
								{DIFF_DATA.map((el) => (
									<option style={{ textAlign: 'center' }} key={el.id}>
										{el.diff}
									</option>
								))}
							</NativeSelect>
						</FormControl>
						<FormControl>
							<InputLabel>문제 수</InputLabel>
							<NativeSelect
								onChange={handleDropDownProbNum}
								inputProps={{
									name: 'probnumber',
									id: 'uncontrolled-native',
								}}
								style={{
									alignContent: 'center',
									backgroundColor: '#FFFFFF',
									margin: '3% 2%',
									height: '3rem',
									borderRadius: '10px',
									width: '96%',
									fontSize: '20px',
									fontWeight: '400',
									textAlignLast: 'center',
								}}
							>
								{PROBNUM_DATA.map((el) => (
									<option style={{ textAlign: 'center' }} key={el.id}>
										{el.num}
									</option>
								))}
							</NativeSelect>
						</FormControl>
						<UpdateTime>
							예상 소요시간은{' '}
							{(DIFF_DATA.find((el) => el.diff === diffselected) || {}).id *
								(PROBNUM_DATA.find((el) => el.num === probnumselected) || {}).id *
								10}
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
