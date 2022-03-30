import { LOAD_MORE_REPOS_REQUEST, LOAD_MORE_REPOS_SUCCESS, LOAD_MORE_REPOS_ERROR, NO_MORE_DATA } from '../../actions'
import github from '../../../apis/github'
import { call, put, takeLatest, select } from 'redux-saga/effects'

export function * watcherLoadMoreReposSaga () {
    yield takeLatest(LOAD_MORE_REPOS_REQUEST, loadMoreRepos)
}

export function * loadMoreRepos (action) {
    const { payload } = action
    const state = yield select()
    try {
        if (!state.getRepos.hasMore) {
            yield put(noMoreData('No more data'))
            return
        }
        const { data } = yield call(getApi, ...[payload.username, state.getRepos.page])
        yield put(loadMoreReposSuccess(data))
    } catch (error) {
        yield put(loadMoreReposError(error))
    }
}

const getApi = async (username, page) => {
    const response = await github.get(`/users/${username}/repos`, {
        params: {
            per_page: 10,
            page: page
        }
    })
    return response
}

export const loadMoreReposSuccess = (data) => {
    console.log(data, 'load more repos success')

    if (data.length < 10) {
        return {
            type: LOAD_MORE_REPOS_SUCCESS,
            payload: {
                repoList: data,
                hasMore: false
            }
        }
    }
    return {
        type: LOAD_MORE_REPOS_SUCCESS,
        payload: {
            repoList: data,
            hasMore: true
        }
    }
}

export const loadMoreReposError = (error) => {
    console.log(error, 'load more repos error')

    return {
        type: LOAD_MORE_REPOS_ERROR,
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
