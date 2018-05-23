import { USER_LOGIN, USER_LOGOUT } from "./constants";

const initialState = {
    email: null,
    token: null,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                email: action.token.email,
                token: action.token,
            }
        
        case USER_LOGOUT:
            return {
                id: null,
                token: null
            }

        default:
            return state
    }
}

export default userReducer