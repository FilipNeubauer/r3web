import { SET_USER_NAME, SET_EMAIL, SET_PHONE, SET_LOC, SET_TRAINER, SET_IS_ENABLED, SET_CURRENT_CHAT } from "./actions";

const initialState = {
    name: "",
    email: "",
    phone: "",
    location: "",
    trainer: false,
    isEnabled: false,
}

const initialChat = null

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return {...state, name: action.payload }
        case SET_EMAIL:
            return {...state, email: action.payload }
        case SET_PHONE:
            return {...state, phone: action.payload }
        case SET_LOC:
            return {...state, location: action.payload }
        case SET_TRAINER:
            return {...state, trainer: action.payload }
        case SET_IS_ENABLED:
            return {...state, isEnabled: action.payload }
        default:
            return state
    }
}


export function chatReducer(state = initialChat, action) {
    switch (action.type) {
        case SET_CURRENT_CHAT:
            return action.payload
        default:
            return state
    }
}



export default userReducer