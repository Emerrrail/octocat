import { LOAD_MORE_FOLLOWERS_REQUEST, LOAD_MORE_FOLLOWERS_SUCCESS, LOAD_MORE_FOLLOWERS_ERROR, NO_MORE_DATA } from "../../actions";
import github from "../../../apis/github";
import { call, put, takeLatest, select } from "redux-saga/effects";

export function* watcherLoadMoreFollowersSaga() {
    yield takeLatest(LOAD_MORE_FOLLOWERS_REQUEST, loadMoreFollowers);
}

export function* loadMoreFollowers(action) {
    const { payload } = action;
    const state = yield select();
    try {
        if (!state.getFollowers.hasMore) {
            yield put(noMoreData('No more data'));
            return;
        }
        const { data } = yield call(getApi, ...[payload.username, state.getFollowers.page]);
        yield put(loadMoreFollowersSuccess(data));
    } catch (error) {
        yield put(loadMoreFollowersError(error));
    }
}

const getApi = async (username, page) => {
    const response = await github.get(`/users/${username}/followers`, {
        params: {
            per_page: 10,
            page: page
        }
    })
    return response;
}

export const loadMoreFollowersSuccess = (data) => {

    console.log(data, 'load more followers success');

    if (data.length < 10) {
        return {
            type: LOAD_MORE_FOLLOWERS_SUCCESS,
            payload: {
                followers: data,
                hasMore: false
            }
        }
    }
    return {
        type: LOAD_MORE_FOLLOWERS_SUCCESS,
        payload: {
            followers: data,
            hasMore: true
        }
    }
}

export const loadMoreFollowersError = (error) => {

    console.log(error, 'load more followers error');

    return {
        type: LOAD_MORE_FOLLOWERS_ERROR,
        payload: {
            error: error
        }
    }
}

export const noMoreData = (message) => {

    console.log(message)

    return {
        type: NO_MORE_DATA
    }
}
