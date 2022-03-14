import { GET_REPOS_REQUEST, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from "../actions";

const initialState = {
    loading: false,
    repolist: [],
    error: null
}

export const getRepos = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPOS_REQUEST:
            return {
                ...state,
                loading: true,
                repolist: [],
                error: null
            }
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                loading: false,
                repolist: action.payload.repolist,
                error: null
            }
        case GET_REPOS_ERROR:
            return {
                ...state,
                loading: false,
                repolist: [],
                error: action.payload.error
            }
        default:
            return state;
    }
}