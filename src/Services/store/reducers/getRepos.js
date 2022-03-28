import { GET_REPOS_REQUEST, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from "../actions";
import { LOAD_MORE_REPOS_REQUEST, LOAD_MORE_REPOS_SUCCESS, LOAD_MORE_REPOS_ERROR, NO_MORE_DATA } from "../actions";

const initialState = {
    loading: false,
    loadMore: false,
    repoList: [],
    page: 2,
    hasMore: false,
    noMoreData: null,
    error: null,
}

export const getRepos = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPOS_REQUEST:
            return {
                ...state,
                loading: true,
                repoList: [],
                error: null
            }
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                repoList: action.payload.repoList,
                hasMore: action.payload.hasMore,
                error: null
            }
        case GET_REPOS_ERROR:
            return {
                ...state,
                loading: false,
                repoList: [],
                error: action.payload.error
            }
        case LOAD_MORE_REPOS_REQUEST:
            return {
                ...state,
                loadMore: true
            }
        case LOAD_MORE_REPOS_SUCCESS:
            const newList = action.payload.repoList;
            const { repoList } = state;
            return {
                ...state,
                loadMore: false,
                repoList: [...repoList, ...newList],
                page: state.page + 1,
                hasMore: action.payload.hasMore,
                error: null
            }
        case LOAD_MORE_REPOS_ERROR:
            return {
                ...state,
                loadMore: false,
                error: action.payload.error
            }
        case NO_MORE_DATA:
            return {
                ...state,
                loadMore: false
            }
        default:
            return state;
    }
}