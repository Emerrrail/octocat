import { TOGGLE_OWNERINFO } from '../actions'

const initialState = {
    open: false
}

export const toggleOwnerInfo = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_OWNERINFO:
        return {
            ...state,
            open: !state.open
        }
    default:
        return state
    }
}
