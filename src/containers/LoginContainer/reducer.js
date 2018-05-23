import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants'

const initialState = {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUESTING:
            return {
                requesting: true,
                successful: false,
                messages: [{ body: 'Loggin in...', time: new Date() }],
                errors: [],
            }
            
        case LOGIN_SUCCESS:
            return {
                requesting: false,
                successful: true,
                messages: [],
                errors: [],
            }

        case LOGIN_ERROR:
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

export default loginReducer