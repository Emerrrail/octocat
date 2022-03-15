import './SearchUserRepos.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getReposRequest } from '../store/actions/index';
import { connect } from 'react-redux';
import RepoList from './RepoList';
import OwnerInfo from './OwnerInfo';


function SearchUserRepos({ repoList }) {

    const { username } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getReposRequest(username));

    }, [dispatch, username])

    return (
        <div className='searchUserRepos'>

            <div className='searchUserRepos__ownerInfo'>
                <OwnerInfo />
            </div>
            <div className='searchUserRepos__repoList'>
                <h3 className='searchUserRepos__repoListTitle'>
                    Popular Repositories
                </h3>
                <RepoList repoList={repoList} username={username} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        repoList: state.getRepos.repoList
    }
}

export default connect(mapStateToProps)(SearchUserRepos);
