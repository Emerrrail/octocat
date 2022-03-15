import { all } from 'redux-saga/effects';
import { watcherGetReposSaga } from './requests/fetchRepos';
import { watcherGetARepoSaga } from './requests/fetchARepo';

export default function* rootSaga() {
    yield all([
        watcherGetReposSaga(),
        watcherGetARepoSaga()
    ]);
}