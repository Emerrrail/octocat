import './RepoList.css'
import React, { useState } from 'react'
import RepoItem from '../RepoItem/RepoItem'

function RepoList ({ repoList, username }) {
    const [matches, setMatches] = useState(window.matchMedia('(max-width: 880px)').matches)

    window.matchMedia('(max-width: 880px)').addEventListener('change', event => setMatches(event.matches))

    const renderRepoItems = repoList.map((item, index) => {
        return <RepoItem
            className='col'
            key={index}
            username={username}
            repoTitle={item.name}
            description={item.description}
            stargazers={item.stargazers_count}
            forks={item.forks_count}
        />
    })

    return (
        <div className='container-sm'>
            <div className={`repoList row ${matches ? 'row-cols-1' : 'row-cols-2'}`}>
                {renderRepoItems}
            </div>
        </div>
    )
}

export default RepoList
