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
        type: GET_A_REPO_SUCCESS,
        payload
    }
}

export const GET_REPOS_ERROR = "GET_REPOS_ERROR";

export const getReposError = (payload) => {
    return {
        type: GET_A_REPO_ERROR,
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

export const LOAD_MORE_REPOS_SUCCESS = "LOAD_MORE_REPOS_SUCCESS";

export const loadMoreReposSuccess = (payload) => {
    return {
        type: LOAD_MORE_REPOS_SUCCESS,
        payload
    }
}

export const LOAD_MORE_REPOS_ERROR = "LOAD_MORE_REPOS_ERROR";

export const loadMoreReposError = (payload) => {
    return {
        type: LOAD_MORE_REPOS_ERROR,
        payload
    }
}



export const GET_A_REPO_REQUEST = "GET_A_REPO_REQUEST";

export const getARepoRequest = (owner, repo) => {
    return {
        type: GET_A_REPO_REQUEST,
        payload: {
            owner: owner,
            repo: repo
        }
    }
}

export const GET_A_REPO_SUCCESS = "GET_A_REPO_SUCCESS";

export const getARepoSuccess = (payload) => {
    return {
        type: GET_A_REPO_SUCCESS,
        payload
    }
}

export const GET_A_REPO_ERROR = "GET_A_REPO_ERROR";

export const getARepoError = (payload) => {
    return {
        type: GET_A_REPO_ERROR,
        payload
    }
}