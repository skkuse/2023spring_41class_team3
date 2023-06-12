import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sendContestData } from 'actions/progressContest';
import { useNavigate } from 'react-router-dom';

function formatTime(milliseconds) {
	const seconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(seconds / 60);

	const formattedMinutes = String(minutes).padStart(2, '0');
	const formattedSeconds = String(seconds % 60).padStart(2, '0');

	return `${formattedMinutes}:${formattedSeconds}`;
}

function ContestTimer() {
	const [executionTime, setExecutionTime] = useState(0);

	const userCodeList = useSelector((state) =>
		state.contestProgress.problemInfo.map((item) => ({
			problemId: item.id,
			userCode: item.userCode,
			language: item.language,
		}))
	);

	function submitCode() {
		sendContestData(userCodeList);
	}

	const navigate = useNavigate();

	const navigateToResult = () => {
		navigate('/result');
	};

	useEffect(() => {
		const startTime = performance.now();

		const interval = setInterval(() => {
			const currentTime = performance.now();
			const time = currentTime - startTime;

			setExecutionTime(time);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const { timeLimit } = useSelector((state) => state.contestSetting);

	const formattedTime = formatTime(timeLimit - executionTime);

	useEffect(() => {
		if (formattedTime === '00:00') {
			submitCode();
			navigateToResult();
		}
	}, [formattedTime]);

	return <div> {formattedTime}</div>;
}

export default ContestTimer;
