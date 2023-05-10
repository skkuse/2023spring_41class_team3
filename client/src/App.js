import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from 'components/LoginModal';
import LandingPage from 'pages/LandingPages/LandingPage';

const App = () => {
	const [user, setUser] = useState(null);

	const handleLoginSuccess = (userInfo) => {
		setUser(userInfo);
	};

	const handleLogout = () => {
		setUser(null);
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={<LandingPage user={user} handleLogout={handleLogout} />}
				/>
				<Route path="/login" element={<Login handleLoginSuccess={handleLoginSuccess} />} />
				<Route
					path="/main"
					element={<LandingPage user={user} handleLogout={handleLogout} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
