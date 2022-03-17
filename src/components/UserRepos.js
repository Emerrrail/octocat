import './UserRepos.css';
import React, { useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getReposRequest } from '../store/actions/index';
import { loadMoreReposRequest } from '../store/actions/index'
import RepoList from './RepoList';
import OwnerInfo from './OwnerInfo';
import Placeholder from './Placeholder';
import observer from './helper-function/observer';



function UserRepos({ loading, loadMore, repoList }) {

    const { username } = useParams();

    const dispatch = useDispatch();

    const observed = useRef();

    const bottomReachedCallback = useCallback((entries) => {
        if (entries[0].isIntersecting) {
            dispatch(loadMoreReposRequest(username))
        }
    }, [dispatch, username])

    useEffect(() => {
        if (observed.current) {
            observer(bottomReachedCallback, observed.current);
        }
    }, [bottomReachedCallback])




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
                <RepoList repoList={repoList} username={username} />
                {loadMore && <Placeholder />}
                <div ref={observed}></div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state: state,
        loading: state.getRepos.loading,
        loadMore: state.getRepos.loadMore,
        repoList: state.getRepos.repoList
    }
}

export default connect(mapStateToProps)(UserRepos);
