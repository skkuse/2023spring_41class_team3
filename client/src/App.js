import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPages/LandingPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route path="/main" element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
