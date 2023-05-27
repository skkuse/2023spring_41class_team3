import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPages/LandingPage';
import ResultPage from 'pages/ResultPages/ResultPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={<LandingPage />}
				/>
				<Route
					path="/main"
					element={<LandingPage />}
				/>
				<Route exact path="/result" element={<ResultPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
