import { GET_REPOS_REQUEST, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from '../../actions/index'
import github from '../../../apis/github'
import { call, put, takeLatest } from 'redux-saga/effects'

export function * watcherGetReposSaga () {
    yield takeLatest(GET_REPOS_REQUEST, fetchRepos)
}

export function * fetchRepos (action) {
    const { payload } = action
    try {
        const response = yield call(getApi, payload.username)
        if (response.status === 200) {
            yield put(fetchReposSuccess(response.data))
        } else {
            yield put(fetchReposError(response))
        };
    } catch (error) {
        yield put(fetchReposError(error))
    }
}

const getApi = async (username) => {
    const response = await github.get(`/users/${username}/repos`, {
        params: {
            per_page: 10
        }
    })
    return response
}

export const fetchReposSuccess = (data) => {
    console.log(data, 'fetch repos success')

    if (data.length < 10) {
        return {
            type: GET_REPOS_SUCCESS,
            payload: {
                repoList: data,
                hasMore: false
            }
        }
    }

    return {
        type: GET_REPOS_SUCCESS,
        payload: {
            repoList: data,
            hasMore: true
        }
    }
}

export const fetchReposError = (error) => {
    console.log(error, 'fetch repos error')

    return {
        type: GET_REPOS_ERROR,
        payload: {
            error: error
        }
    }
}
