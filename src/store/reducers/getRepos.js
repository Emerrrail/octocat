import { GET_REPOS_REQUEST, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from "../actions";
import { LOAD_MORE_REPOS_REQUEST, LOAD_MORE_REPOS_SUCCESS, LOAD_MORE_REPOS_ERROR } from "../actions";

const initialState = {
    loading: false,
    repoList: [],
    page: 1,
    error: null
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
            const { page } = state
            return {
                ...state,
                loading: false,
                repoList: action.payload.repoList,
                page: page + 1,
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
                loading: true,
            }
        case LOAD_MORE_REPOS_SUCCESS:
            const newList = action.payload.repoList;
            const { repoList } = state;
            return {
                ...state,
                loading: false,
                repoList: [...repoList, ...newList],
                page: page + 1
            }
        case LOAD_MORE_REPOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}