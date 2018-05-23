import { call, put, takeLatest } from 'redux-saga/effects'

import { SIGNUP_REQUESTING } from './constants'
import { signupSuccess, signupError } from './actions'
import { loginRequest } from '../LoginContainer/actions'

import { signupApi } from '../../utils/api/apiCalls'

/**
 * This will be run when the SIGNUP_REQUESTING
 * Action is found by the watcher
 *
 * @param  {object} action    The action payload for signup
 *
 * @return {object}           The response data
 */
function* signupFlow (action) {
    try {
        const { email, password, passwordConfirmation } = action

        yield call(signupApi, email, password, passwordConfirmation)

        yield put(signupSuccess())
        yield put(loginRequest({email, password}))
    } catch (error) {
        yield put(signupError({ error }))
    }
}

/**
 * Watches for the SIGNUP_REQUESTING action type
 * When it gets it, it will call signupFlow()
 *
 */
function* signupSaga () {  
    yield takeLatest(SIGNUP_REQUESTING, signupFlow)
}

export default signupSaga