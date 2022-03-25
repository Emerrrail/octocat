import './RepoList.css';
import React from 'react';
import RepoItem from './RepoItem';


function RepoList({ repoList, username }) {

    const renderRepoItems = repoList.map((item, index) => {
        return <RepoItem
            className="col"
            key={index}
            username={username}
            repoTitle={item.name}
            description={item.description}
            stargazers={item.stargazers_count}
            forks={item.forks_count}
        />
    })

    return (
        <div className='container'>
            <div className='repoList row row-cols-2'>
                {renderRepoItems}
            </div>
        </div>
    )
}


export default RepoList;