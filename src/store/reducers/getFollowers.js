import { GET_FOLLOWERS_REQUEST, GET_FOLLOWERS_SUCCESS, GET_FOLLOWERS_ERROR } from "../actions";
import { LOAD_MORE_FOLLOWERS_REQUEST, LOAD_MORE_FOLLOWERS_SUCCESS, LOAD_MORE_FOLLOWERS_ERROR } from "../actions";

const initialState = {
    loading: false,
    loadMore: false,
    followers: [],
    page: 2,
    hasMore: false,
    error: null
}

export const getFollowers = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOLLOWERS_REQUEST:
            return {
                ...state,
                loading: true,
                followers: [],
                error: null
            }
        case GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                loading: false,
                followers: action.payload.followers,
                hasMore: action.payload.hasMore,
                error: null
            }
        case GET_FOLLOWERS_ERROR:
            return {
                ...state,
                loading: false,
                followers: [],
                error: action.payload.error
            }
        case LOAD_MORE_FOLLOWERS_REQUEST:
            return {
                ...state,
                loadMore: true,
            }
        case LOAD_MORE_FOLLOWERS_SUCCESS:
            const newList = action.payload.followers
            const { followers } = state
            return {
                ...state,
                loadMore: false,
                followers: [...followers, ...newList],
                page: state.page + 1,
                hasMore: action.payload.hasMore
            }
        case LOAD_MORE_FOLLOWERS_ERROR:
            return {
                ...state,
                loadMore: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}