import './UserRepos.css';
import React, { useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { getReposRequest, loadMoreReposRequest } from '../store/actions/index';
import RepoList from './RepoList';
import OwnerInfo from './OwnerInfo';
import PlaceholderRepos from './PlaceholderRepos';
import Error from './Error';
import observer from './helper-function/observer';



function UserRepos({ loading, loadMore, repoList, ownerData, error }) {

    console.log(error)

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
            {!error && <div>
                <OwnerInfo />
                <div className='userRepos__repoList'>
                    <h4 className='userRepos__repoList_title'>
                        Repositories
                    </h4>
                    <p className='userRepos__repoList_count'>
                        {reposCount} Repositories has created so far
                    </p>
                    {/* <PlaceholderRepos /> */}
                    {loading && <PlaceholderRepos />}
                    <RepoList repoList={repoList} username={username} />
                    {loadMore && <PlaceholderRepos />}
                    <div ref={observed}></div>
                </div>
            </div>}
            {error && <Error message={"OOPS! USER NOT FOUND"} />}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state: state,
        loading: state.getRepos.loading,
        loadMore: state.getRepos.loadMore,
        repoList: state.getRepos.repoList,
        ownerData: state.getOwnerData.ownerData,
        error: state.getRepos.error
    }
}

export default connect(mapStateToProps)(UserRepos);
