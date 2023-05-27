import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ResultPage from 'pages/ResultPage';
import InterviewPage from 'pages/InterviewPage';
import PSTestPage from 'pages/PSTestPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route path="/main" element={<LandingPage />} />
				<Route exact path="/result" element={<ResultPage />} />
				<Route exact path="/interview" element={<InterviewPage />} />
				<Route exact path="/test" element={<PSTestPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
