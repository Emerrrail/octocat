import { GET_FOLLOWERS_REQUEST, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_ERROR } from '../../actions'
import github from '../../../apis/github'
import { call, put, takeLatest } from 'redux-saga/effects'

export function * watcherGetFollowersSaga () {
    yield takeLatest(GET_FOLLOWERS_REQUEST, fetchFollowers)
}

export function * fetchFollowers (action) {
    const { payload } = action
    try {
        const response = yield call(getApi, payload.username)
        if (response.status === 200) {
            yield put(fetchFollowersSuccess(response.data))
        } else {
            yield put(fetchFollowersError(response))
        };
    } catch (error) {
        yield put(fetchFollowersError(error))
    }
}

const getApi = async (username) => {
    const response = await github.get(`/users/${username}/followers`, {
        params: {
            per_page: 16
        }
    })
    return response
}

export const fetchFollowersSuccess = (data) => {
    console.log(data, 'fetch followers success')

    if (data.length < 16) {
        return {
            type: GET_FOLLOWERS_SUCCESS,
            payload: {
                followers: data,
                hasMore: false
            }
        }
    }

    return {
        type: GET_FOLLOWERS_SUCCESS,
        payload: {
            followers: data,
            hasMore: true
        }
    }
}

export const fetchFollowersError = (error) => {
    console.log('fetch followers error')

    return {
        type: GET_FOLLOWERS_ERROR,
        payload: {
            error: error
        }
    }
}
