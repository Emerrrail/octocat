import { all } from 'redux-saga/effects';
import { watcherGetReposSaga } from './requests/fetchRepos';
import { watcherLoadMoreReposSaga } from './requests/loadMoreRepos';
import { watcherGetARepoSaga } from './requests/fetchARepo';
import { watcherGetFollowersSaga } from './requests/fetchFollowers';
import { watcherLoadMoreFollowersSaga } from './requests/loadMoreFollowers';
import { watcherGetOwnerDataSaga } from './requests/fetchOwnerData';

export default function* rootSaga() {
    yield all([
        watcherGetReposSaga(),
        watcherLoadMoreReposSaga(),
        watcherGetARepoSaga(),
        watcherGetFollowersSaga(),
        watcherLoadMoreFollowersSaga(),
        watcherGetOwnerDataSaga()
    ]);
}