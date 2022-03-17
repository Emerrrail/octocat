
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import UserRepos from './components/UserRepos';
import RepoPage from './components/RepoPage';
import AppLayout from './components/AppLayout';

function App() {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/users/:username/repos" element={<UserRepos />} />
                    <Route path="/users/:username/repos/:repo" element={<RepoPage />} />
                </Routes>
            </AppLayout>
        </Router>
    )
}

export default App