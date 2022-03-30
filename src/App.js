import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import RepoPage from './Pages/RepoPage/RepoPage'
import UserPage from './Pages/UserPage/UserPage'
import AppLayout from './Layouts/AppLayout/AppLayout'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

function App () {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/users/:username/:page" element={<UserPage />} />
                    <Route path="/users/:username/repos/:repo" element={<RepoPage />} />
                    <Route path="/" element={<Navigate to={'/users/octocat/repos'} />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AppLayout>
        </Router>
    )
}

export default App
