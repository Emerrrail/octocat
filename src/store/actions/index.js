export const GET_REPOS_REQUEST = "GET_REPOS_REQUEST";

export const getReposRequest = (username) => {
    return {
        type: GET_REPOS_REQUEST,
        payload: {
            username: username
        }
    }
}

export const GET_REPOS_SUCCESS = "GET_REPOS_SUCCESS";

export const getReposSuccess = (payload) => {
    return {
        type: GET_REPOS_SUCCESS,
        payload
    }
}

export const GET_REPOS_ERROR = "GET_REPOS_ERROR";

export const getReposError = (payload) => {
    return {
        type: GET_REPOS_ERROR,
        payload
    }
}

export const LOAD_MORE_REPOS_REQUEST = "LOAD_MORE_REPOS_REQUEST";

export const loadMoreReposRequest = (username) => {
    return {
        type: LOAD_MORE_REPOS_REQUEST,
        payload: {
            username: username
        }
    }
}