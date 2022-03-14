import { GET_REPOS_REQUEST, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from "../../actions/index";
import github from "../../../apis/github";
import { call, put, takeLatest } from "redux-saga/effects";


export function* watcherGetReposSaga() {
    yield takeLatest(GET_REPOS_REQUEST, fetchRepos);
}

export function* fetchRepos(action) {
    const { payload } = action;
    try {
        const { data } = yield call(getApi, payload.username);
        yield put(fetchReposSuccess(data));
    } catch (error) {
        yield put(fetchReposError(error));
    }
}

const getApi = async (username) => {
    const response = await github.get(`/users/${username}/repos`, {
        params: {
            per_page: 10
        }
    })
    return response;
}

export const fetchReposSuccess = (data) => {

    console.log('fetch repos success');

    return {
        type: GET_REPOS_SUCCESS,
        payload: {
            repolist: data
        }
    }
}

export const fetchReposError = (error) => {

    console.log('fetch repos error');

    return {
        type: GET_REPOS_ERROR,
        payload: {
            error: error
        }
    }
}
