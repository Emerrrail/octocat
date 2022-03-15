import './RepoItem.css';
import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';

function RepoItem({ username, repoTitle, description, stargazers, forks }) {

  const stargazersCount = stargazers >= 1000 ? `${Math.round((stargazers / 1000)).toLocaleString()}k` : stargazers;

  const forksCount = forks >= 1000 ? `${Math.round((forks / 1000)).toLocaleString()}k` : forks;

  return (
    <Link to={`/users/${username}/repos/${repoTitle}`} >
      <div className='repoItem'>
        <div className='repoItem__top'>
          <h4 className='repoItem__repoTitle'>
            {repoTitle}
          </h4>
          <p className='repoItem__description'>
            {description}
          </p>
        </div>
        <div className='repoItem__bottom'>
          <div className='repoItem__stargazers_container'>
            <StarIcon className='repoItem__icon' />
            {stargazersCount}
          </div>
          <div className='repoItem__forks_container'>
            <span className="repoItem__icon material-icons">
              call_split
            </span>
            {forksCount}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RepoItem