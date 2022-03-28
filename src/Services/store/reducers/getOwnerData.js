import { GET_OWNER_DATA_REQUEST, GET_OWNER_DATA_SUCCESS, GET_OWNER_DATA_ERROR } from "../actions";

const initialState = {
    loading: false,
    ownerData: {},
    error: null
}

export const getOwnerData = (state = initialState, action) => {
    switch (action.type) {
        case GET_OWNER_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                ownerData: {}
            }
        case GET_OWNER_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                ownerData: action.payload.ownerData,
                error: null
            }
        case GET_OWNER_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}