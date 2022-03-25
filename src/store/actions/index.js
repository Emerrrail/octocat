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

export const GET_FOLLOWERS_REQUEST = 'GET_FOLLOWERS_REQUEST';

export const getFollowersRequest = (username) => {
    return {
        type: GET_FOLLOWERS_REQUEST,
        payload: {
            username: username
        }
    }
}

export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS';

export const getFollowersSuccess = (payload) => {
    return {
        type: GET_FOLLOWERS_SUCCESS,
        payload
    }
}

export const GET_FOLLOWERS_ERROR = 'GET_FOLLOWERS_ERROR';

export const getFollowersError = (payload) => {
    return {
        type: GET_FOLLOWERS_ERROR,
        payload
    }
}

export const LOAD_MORE_FOLLOWERS_REQUEST = 'LOAD_MORE_FOLLOWERS_REQUEST';

export const loadMoreFollowersRequest = (username) => {
    return {
        type: LOAD_MORE_FOLLOWERS_REQUEST,
        payload: {
            username: username
        }
    }
}

export const LOAD_MORE_FOLLOWERS_SUCCESS = 'LOAD_MORE_FOLLOWERS_SUCCESS';

export const loadMoreFollowersSuccess = (payload) => {
    return {
        type: LOAD_MORE_FOLLOWERS_SUCCESS,
        payload
    }
}

export const LOAD_MORE_FOLLOWERS_ERROR = 'LOAD_MORE_FOLLOWERS_ERROR';

export const loadMoreFollowersError = (payload) => {
    return {
        type: LOAD_MORE_FOLLOWERS_ERROR,
        payload
    }
}

export const NO_MORE_DATA = 'NO_MORE_DATA';

export const noMoreData = () => {
    return {
        type: NO_MORE_DATA
    }
}


export const GET_OWNER_DATA_REQUEST = 'GET_OWNER_DATA_REQUEST';

export const getOwnerDataRequest = (owner) => {
    return {
        type: GET_OWNER_DATA_REQUEST,
        payload: {
            owner: owner
        }
    }
}

export const GET_OWNER_DATA_SUCCESS = 'GET_OWNER_DATA_SUCCESS';

export const getOwnerDataSuccess = (payload) => {
    return {
        type: GET_OWNER_DATA_SUCCESS,
        payload
    }
}

export const GET_OWNER_DATA_ERROR = 'GET_OWNER_DATA_ERROR';

export const getOwnerDataError = (payload) => {
    return {
        type: GET_OWNER_DATA_ERROR,
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

export const GET_LANGUAGE_DATA_REQUEST = "GET_LANGUAGE_DATA_REQUEST";

export const getLanguageDataRequest = (owner, repo) => {
    return {
        type: GET_LANGUAGE_DATA_REQUEST,
        payload: {
            owner: owner,
            repo: repo
        }
    }
}

export const GET_LANGUAGE_DATA_SUCCESS = "GET_LANGUAGE_DATA_SUCCESS";
export const GET_LANGUAGE_DATA_ERROR = "GET_LANGUAGE_DATA_ERROR";