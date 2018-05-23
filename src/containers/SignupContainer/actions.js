import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants'

export function signupRequest({ email, password, passwordConfirmation }) {
    return {
        type: SIGNUP_REQUESTING,
        email,
        password,
        passwordConfirmation
    }
}

export function signupSuccess() {
    return {
        type: SIGNUP_SUCCESS,
    }
}

export function signupError({ error }) {
    return {
        type: SIGNUP_ERROR,
        error
    }
}