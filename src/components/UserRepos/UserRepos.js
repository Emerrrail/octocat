import './UserRepos.css'
import React, { useEffect, useRef, useCallback } from 'react'
import { useDispatch, connect } from 'react-redux'
import { loadMoreReposRequest } from '../../Services/store/actions/index'
import RepoList from '../RepoList/RepoList'
import PlaceholderRepos from '../PlaceholderRepos/PlaceholderRepos'
import observer from '../../helper-function/observer'

function UserRepos ({ username, loading, loadMore, repoList, ownerData }) {
    const reposCount = ownerData.public_repos

    const dispatch = useDispatch()

    const observed = useRef()

    const bottomReachedCallback = useCallback((entries) => {
        if (entries[0].isIntersecting) {
            dispatch(loadMoreReposRequest(username))
        }
    }, [dispatch, username])

    useEffect(() => {
        if (observed.current) {
            observer(bottomReachedCallback, observed.current)
        }
    }, [bottomReachedCallback])

    return (
        <div className='userRepos'>
            <div>
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
                </div>
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        state: state,
        loading: state.getRepos.loading,
        loadMore: state.getRepos.loadMore,
        repoList: state.getRepos.repoList,
        ownerData: state.getOwnerData.ownerData,
        error: state.getRepos.error
    }
}

export default connect(mapStateToProps)(UserRepos)
