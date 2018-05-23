import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./constants";

const initialState = {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
}

function signupReducer( state = initialState, action ) {
    switch (action.type) {
        case SIGNUP_REQUESTING:
            return {
                requesting: true,
                successful: false,
                messages: [{ body: 'Signing up...', time: new Date() }],
                errors: [],
            }
            
        case SIGNUP_SUCCESS:
            return {
                requesting: false,
                successful: true,
                messages: [],
                errors: [],
            }

        case SIGNUP_ERROR:
            return {
                requesting: false,
                successful: false,
                messages: [],
                errors: state.errors.concat([{
                    body: action.error.toString(),
                    time: new Date(),
                }]),
            }

        default:
            return state
    }
}

export default signupReducer