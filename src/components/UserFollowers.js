import './UserFollowers.css';
import React, { useEffect, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { getFollowersRequest, loadMoreFollowersRequest } from '../store/actions/index';
import OwnerInfo from './OwnerInfo';
import FollowerList from './FollowerList';
import PlaceholderFollowers from './PlaceholderFollowers';
import observer from './helper-function/observer';


function UserFollowers({ loading, followers, loadMore, ownerData }) {

    console.log(ownerData)

    const { username } = useParams();

    const dispatch = useDispatch();

    const observed = useRef();

    const followersCount = ownerData.followers;

    const bottomReachedCallback = useCallback((entries) => {

        if (entries[0].isIntersecting) {
            dispatch(loadMoreFollowersRequest(username))
        }

    }, [dispatch, username])


    useEffect(() => {

        if (observed.current) {
            observer(bottomReachedCallback, observed.current);
        }

    }, [bottomReachedCallback])


    useEffect(() => {

        dispatch(getFollowersRequest(username))

    }, [dispatch, username])


    return (
        <div className='userFollowers'>
            {<OwnerInfo />}
            <div className='userFollowers__followerList'>
                <h4 className='userFollowers__followerList_title'>
                    Followers
                </h4>
                <p className='userFollowers__followerList_count'>
                    {followersCount} People has followed so far
                </p>
                {loading && <PlaceholderFollowers />}
                <FollowerList followers={followers} />
                {loadMore && <PlaceholderFollowers />}
                <div ref={observed}></div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        loading: state.getFollowers.loading,
        followers: state.getFollowers.followers,
        loadMore: state.getFollowers.loadMore,
        ownerData: state.getOwnerData.ownerData
    }
}

export default connect(mapStateToProps)(UserFollowers);
// export default UserFollowers