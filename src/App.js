import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './components/Home';
import RepoPage from './components/RepoPage';
import UserPage from './components/UserPage';
import AppLayout from './components/AppLayout';
import NotFoundPage from './components/NotFoundPage';

function App() {

    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/users/:username/:page" element={<UserPage />} />
                    <Route path="/users/:username/repos/:repo" element={<RepoPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AppLayout>
        </Router>
    )
}

export default App;