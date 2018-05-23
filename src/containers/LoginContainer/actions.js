import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants'

export function loginRequest({email, password}) {
    return {
        type: LOGIN_REQUESTING,
        email,
        password
    }
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS,
    }
}

export function loginError({ error }) {
    return {
        type: LOGIN_ERROR,
        error
    }
}