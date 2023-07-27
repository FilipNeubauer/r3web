import { SET_LANGUAGE } from "./actions";

const initialState = {
    language: false,
}

const initialChat = null

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LANGUAGE:
            return {...state, name: action.payload }
        default:
            return state
    }
}

export default userReducer