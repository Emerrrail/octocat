import { GET_A_REPO_REQUEST, GET_A_REPO_SUCCESS, GET_A_REPO_ERROR } from '../actions'

const initialState = {
    loading: false,
    repoDetail: {},
    error: null
}

export const getARepo = (state = initialState, action) => {
    switch (action.type) {
    case GET_A_REPO_REQUEST:
        return {
            ...state,
            loading: true,
            repoDetail: {},
            error: null
        }
    case GET_A_REPO_SUCCESS:
        return {
            ...state,
            loading: false,
            repoDetail: action.payload.repoDetail,
            error: null
        }
    case GET_A_REPO_ERROR:
        return {
            ...state,
            loading: false,
            repoDetail: {},
            error: action.payload.error
        }
    default:
        return state
    }
}
