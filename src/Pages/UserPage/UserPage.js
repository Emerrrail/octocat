import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import UserLayout from '../../Layouts/UserLayout/UserLayout';
import UserRepos from '../../components/UserRepos/UserRepos';
import UserFollowers from '../../components/UserFollowers/UserFollowers';
import Error from '../../components/Error/Error';
import { getReposRequest } from '../../Services/store/actions/index';

function UserPage({ state, errorRepos, errorFollowers }) {

    if (errorRepos) {
        console.log(errorRepos, "errorRepos")
    }

    if (errorFollowers) {
        console.log(errorFollowers.status, "errorFollowers")
    }



    const { username, page } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getReposRequest(username));

    }, [dispatch, username])
    //在搜尋失敗後，成為error的狀態，因為UserRepos沒有生成，也不會再打API，所以就停在error畫面了。
    //可以在UserPage dispatch action
    return (
        <div>
            {!errorRepos && !errorFollowers &&
                <UserLayout>
                    {page === "repos" && <UserRepos username={username} />}
                    {page === "followers" && <UserFollowers username={username} />}
                </UserLayout>
            }

            {errorRepos && !errorFollowers &&
                <UserLayout>
                    <UserFollowers username={username} />
                </UserLayout>
            }
            {!errorRepos && errorFollowers &&
                <UserLayout>
                    {page === "repos" && <UserRepos username={username} />}
                </UserLayout>
            }

            {errorRepos && page === "repos" &&
                <div>
                    {errorRepos.status === 404 && <Error message={"OOPS! USER NOT FOUND"} />}
                    {errorRepos.status === 403 && <Error message={"OOPS! API RATE HAS BEEN EXCEEDED. PLEASE WAIT A WHILE AND RELOAD THE PAGE."} />}
                    {!errorRepos.status && <Error message={"NETWORK ERROR"} />}
                </div>
            }
            {errorFollowers && page === "followers" &&
                <div>
                    {errorFollowers.status === 404 && <Error message={"OOPS! USER NOT FOUND"} />}
                    {errorFollowers.status === 403 && <Error message={"OOPS! API RATE HAS BEEN EXCEEDED. PLEASE WAIT A WHILE AND RELOAD THE PAGE."} />}
                    {!errorFollowers.status && <Error message={"NETWORK ERROR"} />}
                </div>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state: state,
        errorRepos: state.getRepos.error,
        errorFollowers: state.getFollowers.error
    }
}

export default connect(mapStateToProps)(UserPage);

// export default UserPage