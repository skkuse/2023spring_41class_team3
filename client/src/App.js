import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import LandingPage from './pages/LandingPage';

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
                <Route exact path="/" element={<LandingPage handleLoginSuccess={handleLoginSuccess} />} />
                <Route path="/login" element={<Login handleLoginSuccess={handleLoginSuccess} />} />
                <Route path="/main" element={<LandingPage user={user} handleLogout={handleLogout} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
