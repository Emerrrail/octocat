
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import SearchUserRepos from './components/SearchUserRepos';
import RepoPage from './components/RepoPage';
import AppLayout from './components/AppLayout';

function App() {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/users/:username/repos" element={<SearchUserRepos />} />
                    <Route path="/users/:username/repos/:repo" element={<RepoPage />} />
                </Routes>
            </AppLayout>
        </Router>
    )
}

export default App