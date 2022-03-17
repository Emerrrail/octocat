import './RepoList.css';
import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RepoItem from './RepoItem';
// import logo from './icon/icon-github.png';
import { loadMoreReposRequest } from '../store/actions';
import observer from './helper-function/observer';


function RepoList({ repoList, page, username }) {

    const dispatch = useDispatch();

    const observed = useRef();

    const bottomReachedCallback = (entries) => {
        if (entries[0].isIntersecting) {
            console.log('reach');
        }
    }

    console.log("Page Render from RepoList");


    useEffect(() => {
        if (observed.current) {
            observer(bottomReachedCallback, observed.current);
        }
    }, [])


    const renderRepoItems = repoList.map((item, index) => {
        return <RepoItem
            key={index}
            username={username}
            repoTitle={item.name}
            description={item.description}
            stargazers={item.stargazers_count}
            forks={item.forks_count}
        />
    })



    return (
        <div>
            <div className='repoList'>
                {renderRepoItems}
            </div>
            <div ref={observed}></div>
        </div>
    )
}


export default RepoList;