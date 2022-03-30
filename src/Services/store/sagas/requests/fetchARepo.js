import { GET_A_REPO_REQUEST, GET_A_REPO_SUCCESS, GET_A_REPO_ERROR } from '../../actions/index'
import github from '../../../apis/github'
import { call, put, takeLatest } from 'redux-saga/effects'

export function * watcherGetARepoSaga () {
    yield takeLatest(GET_A_REPO_REQUEST, fetchARepo)
}

export function * fetchARepo (action) {
    const { payload } = action
    try {
        const response = yield call(getApi, ...[payload.owner, payload.repo])
        if (response.status === 200) {
            yield put(fetchARepoSuccess(response.data))
        } else {
            yield put(fetchARepoError(response))
        };
    } catch (error) {
        yield put(fetchARepoError(error))
    }
}

const getApi = async (owner, repo) => {
    const response = await github.get(`/repos/${owner}/${repo}`)
    return response
}

export const fetchARepoSuccess = (data) => {
    console.log(data, 'fetch a repo success')

    return {
        type: GET_A_REPO_SUCCESS,
        payload: {
            repoDetail: data
        }
    }
}

export const fetchARepoError = (error) => {
    console.log('fetch a repo error', error)

    return {
        type: GET_A_REPO_ERROR,
        payload: {
            error: error
        }
    }
}
