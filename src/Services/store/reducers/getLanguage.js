import { GET_LANGUAGE_DATA_REQUEST, GET_LANGUAGE_DATA_SUCCESS, GET_LANGUAGE_DATA_ERROR } from "../actions";

const initialState = {
    loading: false,
    language: {},
    error: null
}

export const getLanguage = (state = initialState, action) => {
    switch (action.type) {
        case GET_LANGUAGE_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_LANGUAGE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                language: action.payload.language,
                error: null
            }
        case GET_LANGUAGE_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}