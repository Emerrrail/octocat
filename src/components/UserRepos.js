import './UserRepos.css';
import React, { useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { getReposRequest, loadMoreReposRequest } from '../store/actions/index';
import RepoList from './RepoList';
import OwnerInfo from './OwnerInfo';
import PlaceholderRepos from './PlaceholderRepos';
import observer from './helper-function/observer';



function UserRepos({ loading, loadMore, repoList, ownerData }) {

    const reposCount = ownerData.public_repos;

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
            <OwnerInfo />
            <div className='userRepos__repoList'>
                <h4 className='userRepos__repoList_title'>
                    Repositories
                </h4>
                <p className='userRepos__repoList_count'>
                    {reposCount} Repositories has created so far
                </p>
                {loading && <PlaceholderRepos />}
                <RepoList repoList={repoList} username={username} />
                {loadMore && <PlaceholderRepos />}
                <div ref={observed}></div>
                {/* <PlaceholderRepos /> */}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state: state,
        loading: state.getRepos.loading,
        loadMore: state.getRepos.loadMore,
        repoList: state.getRepos.repoList,
        error: state.getRepos.error,
        ownerData: state.getOwnerData.ownerData
    }
}

export default connect(mapStateToProps)(UserRepos);
