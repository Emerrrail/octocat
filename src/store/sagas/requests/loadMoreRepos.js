import { LOAD_MORE_REPOS_REQUEST, LOAD_MORE_REPOS_SUCCESS, LOAD_MORE_REPOS_ERROR } from "../../actions";
import github from "../../../apis/github";
import { call, put, takeLatest } from "redux-saga/effects";

export function* watcherLoadMoreReposSaga() {
    yield takeLatest(LOAD_MORE_REPOS_REQUEST, loadMoreRepos);
}

export function* loadMoreRepos(action) {
    const { payload } = action;
    try {
        const { data } = yield call(getApi, ...[payload.username, payload.page]);
        yield put(loadMoreReposSuccess(data));
    } catch (error) {
        yield put(loadMoreReposError(error));
    }
}

const getApi = async (username, page) => {
    const response = await github.get(`/users/${username}/repos`, {
        params: {
            per_page: 10,
            page: page
        }
    })
    return response;
}

export const loadMoreReposSuccess = (data) => {

    console.log('load more repos success');

    return {
        type: LOAD_MORE_REPOS_SUCCESS,
        payload: {
            repoList: data
        }
    }
}

export const loadMoreReposError = (error) => {

    console.log('load more repos error');

    return {
        type: LOAD_MORE_REPOS_ERROR,
        payload: {
            error: error
        }
    }
}