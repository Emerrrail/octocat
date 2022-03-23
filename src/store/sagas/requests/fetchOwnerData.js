import { GET_OWNER_DATA_REQUEST, GET_OWNER_DATA_SUCCESS, GET_OWNER_DATA_ERROR } from "../../actions";
import github from "../../../apis/github";
import { call, put, takeLatest } from "redux-saga/effects";

export function* watcherGetOwnerDataSaga() {
    yield takeLatest(GET_OWNER_DATA_REQUEST, fetchOwnerData);
}

export function* fetchOwnerData(action) {
    const { payload } = action;
    try {
        const { data } = yield call(getApi, payload.owner);
        yield put(fetchOwnerDataSuccess(data));
    } catch (error) {
        yield put(fetchOwnerDataError(error));
    }
}

const getApi = async (owner) => {
    const response = await github.get(`/users/${owner}`)
    return response;
}

export const fetchOwnerDataSuccess = (data) => {

    console.log(data, 'fetch owner data success');

    return {
        type: GET_OWNER_DATA_SUCCESS,
        payload: {
            ownerData: data
        }
    }
}

export const fetchOwnerDataError = (error) => {

    console.log('fetch owner data error', error);

    return {
        type: GET_OWNER_DATA_ERROR,
        payload: {
            error: error
        }
    }
}

const dataTemp = {
    "login": "octocat",
    "id": 583231,
    "node_id": "MDQ6VXNlcjU4MzIzMQ==",
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false,
    "name": "The Octocat",
    "company": "@github",
    "blog": "https://github.blog",
    "location": "San Francisco",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 8,
    "followers": 5285,
    "following": 9,
    "created_at": "2011-01-25T18:44:36Z",
    "updated_at": "2022-02-22T15:07:13Z"
}