import './UserRepos.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getReposRequest } from '../store/actions/index';
import { connect } from 'react-redux';
import RepoList from './RepoList';
import OwnerInfo from './OwnerInfo';
import Placeholder from './Placeholder';


function UserRepos({ state, loading, repoList, page }) {

    console.log("User Repos", state, loading, repoList, page);

    const { username } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getReposRequest(username));

    }, [dispatch, username])

    return (
        <div className='userRepos'>

            <div className='userRepos__ownerInfo'>
                <OwnerInfo />
            </div>
            <div className='userRepos__repoList'>
                <h3 className='userRepos__repoListTitle'>
                    Repositories
                </h3>
                {loading && <Placeholder />}
                <RepoList repoList={repoList} page={page} username={username} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state: state,
        loading: state.getRepos.loading,
        repoList: state.getRepos.repoList,
        page: state.getRepos.page
    }
}

export default connect(mapStateToProps)(UserRepos);
