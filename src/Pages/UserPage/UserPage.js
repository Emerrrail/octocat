import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import UserLayout from '../../Layouts/UserLayout/UserLayout'
import UserRepos from '../../components/UserRepos/UserRepos'
import UserFollowers from '../../components/UserFollowers/UserFollowers'
import Error from '../../components/Error/Error'
import { getReposRequest } from '../../Services/store/actions/index'
import { scrollToTop } from '../../helper-function/scrollToTop'

function UserPage ({ errorRepos, errorFollowers }) {
    const { username, page } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReposRequest(username))
        scrollToTop()
    }, [dispatch, username])

    return (
        <div>
            {!errorRepos && !errorFollowers &&
                <UserLayout>
                    {page === 'repos' && <UserRepos username={username} />}
                    {page === 'followers' && <UserFollowers username={username} />}
                </UserLayout>
            }

            {errorRepos && !errorFollowers &&
                <UserLayout>
                    <UserFollowers username={username} />
                </UserLayout>
            }
            {!errorRepos && errorFollowers &&
                <UserLayout>
                    {page === 'repos' && <UserRepos username={username} />}
                </UserLayout>
            }

            {errorRepos && page === 'repos' &&
                <div>
                    {errorRepos.status === 404 && <Error message={'OOPS! USER NOT FOUND'} />}
                    {errorRepos.status === 403 && <Error message={'OOPS! API RATE HAS BEEN EXCEEDED. PLEASE WAIT A WHILE AND RELOAD THE PAGE.'} />}
                    {!errorRepos.status && <Error message={'NETWORK ERROR'} />}
                </div>
            }
            {errorFollowers && page === 'followers' &&
                <div>
                    {errorFollowers.status === 404 && <Error message={'OOPS! USER NOT FOUND'} />}
                    {errorFollowers.status === 403 && <Error message={'OOPS! API RATE HAS BEEN EXCEEDED. PLEASE WAIT A WHILE AND RELOAD THE PAGE.'} />}
                    {!errorFollowers.status && <Error message={'NETWORK ERROR'} />}
                </div>
            }
        </div>
    )
}

function mapStateToProps (state) {
    return {
        errorRepos: state.getRepos.error,
        errorFollowers: state.getFollowers.error
    }
}

export default connect(mapStateToProps)(UserPage)
