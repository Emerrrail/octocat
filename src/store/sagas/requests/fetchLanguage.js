import { GET_LANGUAGE_DATA_REQUEST, GET_LANGUAGE_DATA_SUCCESS, GET_LANGUAGE_DATA_ERROR } from "../../actions";
import github from "../../../apis/github";
import { call, put, takeLatest } from "redux-saga/effects";

export function* watcherGetLanguageSaga() {
    yield takeLatest(GET_LANGUAGE_DATA_REQUEST, fetchLanguage);
}

export function* fetchLanguage(action) {
    const { payload } = action;
    try {
        const { data } = yield call(getApi, ...[payload.owner, payload.repo]);
        yield put(fetchLanguageSuccess(data));
    } catch (error) {
        yield put(fetchLanguageError(error));
    }
}

const getApi = async (owner, repo) => {
    const response = await github.get(`/repos/${owner}/${repo}/languages`)
    return response;
}

export const fetchLanguageSuccess = (data) => {

    console.log(data, 'fetch language success');

    return {
        type: GET_LANGUAGE_DATA_SUCCESS,
        payload: {
            language: data
        }
    }
}

export const fetchLanguageError = (error) => {

    console.log('fetch language error', error);

    return {
        type: GET_LANGUAGE_DATA_ERROR,
        payload: {
            error: error
        }
    }
}