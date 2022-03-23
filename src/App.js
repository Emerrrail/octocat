import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './components/Home';
import UserRepos from './components/UserRepos';
import RepoPage from './components/RepoPage';
import UserFollowers from './components/UserFollowers';
import UserFollowing from './components/UserFollowing';
import AppLayout from './components/AppLayout';
import NotFoundPage from './components/NotFoundPage';

function App() {

    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/users/:username/repos" element={<UserRepos />} />
                    <Route path="/users/:username/followers" element={<UserFollowers />} />
                    <Route path="/users/:username/following" element={<UserFollowing />} />
                    <Route path="/users/:username/repos/:repo" element={<RepoPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/404" element={<NotFoundPage />} />
                </Routes>
            </AppLayout>
        </Router>
    )
}

export default App;