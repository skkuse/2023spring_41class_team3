import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ResultPage from 'pages/ResultPage';
import InterviewPage from 'pages/InterviewPage';
import PSTestPage from 'pages/PSTestPage';
import MainPage from 'pages/MainPage';
import FeedbackPage from 'pages/FeedbackPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route path="/main" element={<MainPage />} />

				<Route exact path="/test" element={<PSTestPage />} />
				<Route exact path="/result" element={<ResultPage />} />
				<Route exact path="/interview" element={<InterviewPage />} />
				<Route exact path="/feedback" element={<FeedbackPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
