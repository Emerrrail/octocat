import { GET_LANGUAGE_DATA_REQUEST, GET_LANGUAGE_DATA_SUCCESS, GET_LANGUAGE_DATA_ERROR } from '../../actions'
import github from '../../../apis/github'
import { call, put, takeLatest } from 'redux-saga/effects'

export function * watcherGetLanguageSaga () {
    yield takeLatest(GET_LANGUAGE_DATA_REQUEST, fetchLanguage)
}

export function * fetchLanguage (action) {
    const { payload } = action
    try {
        const response = yield call(getApi, ...[payload.owner, payload.repo])
        if (response.status === 200) {
            yield put(fetchLanguageSuccess(response.data))
        } else {
            yield put(fetchLanguageError(response))
        };
    } catch (error) {
        yield put(fetchLanguageError(error))
    }
}

const getApi = async (owner, repo) => {
    const response = await github.get(`/repos/${owner}/${repo}/languages`)
    return response
}

export const fetchLanguageSuccess = (data) => {
    console.log('fetch language success', data)

    return {
        type: GET_LANGUAGE_DATA_SUCCESS,
        payload: {
            language: data
        }
    }
}

export const fetchLanguageError = (error) => {
    console.log('fetch language error', error)

    return {
        type: GET_LANGUAGE_DATA_ERROR,
        payload: {
            error: error
        }
    }
}
