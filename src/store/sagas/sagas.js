import { all } from 'redux-saga/effects';
import { watcherGetReposSaga } from './requests/fetchRepos';

export default function* rootSaga() {
    yield all([
        watcherGetReposSaga()
    ]);
}