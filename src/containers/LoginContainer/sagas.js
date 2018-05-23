import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { LOGIN_REQUESTING, LOGIN_ERROR } from './constants'
import { loginSuccess, loginError } from './actions'

import { userLogin, userLogout } from '../NavigationContainer/actions'
import { USER_LOGOUT } from '../NavigationContainer/constants'

import { loginApi } from '../../utils/api/apiCalls'

function* loginFlow (email, password) {
    let token
    try {
        token = yield call(loginApi, email, password)
        yield put(userLogin(token.data))
        yield put(loginSuccess())
        localStorage.setItem('token', JSON.stringify(token.data))
        yield put(push(`/dashboard`))
    } catch (error) {
        yield put(loginError({error}))
    } finally {
        if (yield cancelled()) {
            yield put(push(`/login`))
        }
    }

    return token
}

function* logout() {
    yield put(userLogout())
    localStorage.removeItem('token')
    yield put(push(`/login`))
}

function* loginSaga() {
    while(true) {
        const {email, password} = yield take(LOGIN_REQUESTING)
        const task = yield fork(loginFlow, email, password)
        const action = yield take([USER_LOGOUT, LOGIN_ERROR])

        if (action.type === USER_LOGOUT) {
            yield cancel(task)
        }

        yield call(logout)
    }

}

export default loginSaga