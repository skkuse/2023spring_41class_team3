import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function formatTime(milliseconds) {
	const seconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(seconds / 60);

	const formattedMinutes = String(minutes).padStart(2, '0');
	const formattedSeconds = String(seconds % 60).padStart(2, '0');

	return `${formattedMinutes}:${formattedSeconds}`;
}

function ContestTimer() {
	const [executionTime, setExecutionTime] = useState(0);

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

	return <div> {formattedTime}</div>;
}

export default ContestTimer;
