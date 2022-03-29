import './RepoItem.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Star from '../icon/Star'
import Fork from '../icon/Fork'
import { thousand } from '../../helper-function/numberConverter'

function RepoItem ({ username, repoTitle, description, stargazers, forks }) {
    const stargazersCount = thousand(stargazers)

    const forksCount = thousand(forks)

    return (
        <Link to={`/users/${username}/repos/${repoTitle}`} >
            <div className='repoItem'>
                <div className='repoItem__top'>
                    <h5 className='repoItem__repo_title'>
                        {repoTitle}
                    </h5>
                    <p className='repoItem__description'>
                        {description}
                    </p>
                </div>
                <div className='repoItem__bottom'>
                    <div className='repoItem__stargazers_container'>
                        <div className='repoItem__icon'>
                            <Star />
                        </div>
                        {stargazersCount}
                    </div>
                    <div className='repoItem__forks_container'>
                        <div className='repoItem__icon'>
                            <Fork />
                        </div>
                        {forksCount}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RepoItem
