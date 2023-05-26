import React from 'react';
import Countdown from 'react-countdown';

const TIME_LIMIT = 1000000;

function InterviewTimer() {
	return <Countdown date={Date.now() + TIME_LIMIT} />;
}

export default InterviewTimer;
