import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import SearchUsername from './components/SearchUsername';
import RepoList from './components/RepoList';
import RepoPage from './components/RepoPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchUsername />} />
                <Route path="/users/:username/repos" element={<RepoList />} />
                <Route path="/users/:username/repos/:repo" element={<RepoPage />} />
            </Routes>
        </Router>
    )
}

export default App