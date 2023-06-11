import React from 'react';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';

function InterviewTimer() {
	const { timeLimit } = useSelector((state) => state.contestSetting);

	return <Countdown date={Date.now() + timeLimit} daysInHours />;
}

export default InterviewTimer;
