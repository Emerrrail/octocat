import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import UserLayout from './UserLayout';
import UserRepos from './UserRepos';
import UserFollowers from './UserFollowers';
import Error from './Error';
import { getReposRequest } from '../store/actions/index';

function UserPage({ errorRepos, errorFollowers }) {

    const { username, page } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getReposRequest(username));

    }, [dispatch, username])
    //在搜尋失敗後，成為error的狀態，因為UserRepos沒有生成，也不會再打API，所以就停在error畫面了。
    //可以在UserPage dispatch action
    return (
        <div>
            {!errorRepos && !errorFollowers ?
                <UserLayout>
                    {page === "repos" && <UserRepos username={username} />}
                    {page === "followers" && <UserFollowers username={username} />}
                </UserLayout>
                : null}
            {errorRepos || errorFollowers ? <Error message={"OOPS! USER NOT FOUND"} /> : null}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        errorRepos: state.getRepos.error,
        errorFollowers: state.getFollowers.error
    }
}

export default connect(mapStateToProps)(UserPage);

// export default UserPage