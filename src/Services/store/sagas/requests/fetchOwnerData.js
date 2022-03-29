import { GET_OWNER_DATA_REQUEST, GET_OWNER_DATA_SUCCESS, GET_OWNER_DATA_ERROR } from '../../actions'
import github from '../../../apis/github'
import { call, put, takeLatest } from 'redux-saga/effects'

export function * watcherGetOwnerDataSaga () {
    yield takeLatest(GET_OWNER_DATA_REQUEST, fetchOwnerData)
}

export function * fetchOwnerData (action) {
    const { payload } = action
    try {
        const response = yield call(getApi, payload.owner)
        if (response.status === 200) {
            yield put(fetchOwnerDataSuccess(response.data))
        } else {
            yield put(fetchOwnerDataError(response))
        };
    } catch (error) {
        yield put(fetchOwnerDataError(error))
    }
}

const getApi = async (owner) => {
    const response = await github.get(`/users/${owner}`)
    return response
}

export const fetchOwnerDataSuccess = (data) => {
    console.log(data, 'fetch owner data success')

    return {
        type: GET_OWNER_DATA_SUCCESS,
        payload: {
            ownerData: data
        }
    }
}

export const fetchOwnerDataError = (error) => {
    console.log('fetch owner data error', error)

    return {
        type: GET_OWNER_DATA_ERROR,
        payload: {
            error: error
        }
    }
}
