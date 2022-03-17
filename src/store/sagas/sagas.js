import { all } from 'redux-saga/effects';
import { watcherGetReposSaga } from './requests/fetchRepos';
import { watcherGetARepoSaga } from './requests/fetchARepo';
import { watcherLoadMoreReposSaga } from './requests/loadMoreRepos';

export default function* rootSaga() {
    yield all([
        watcherGetReposSaga(),
        watcherGetARepoSaga(),
        watcherLoadMoreReposSaga()
    ]);
}