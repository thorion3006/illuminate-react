import axios from 'axios'

import {handleApiErrors} from './api-errors'

// Update this url in production
const baseUrl = 'http://localhost:3002'

/**
 * Initiates user signup, returning a promise
 *
 * @param  {string} url                        The URL we want to request
 * @param  {string} email                      The email id of the new user
 * @param  {string} password                   The new password
 * @param  {string} passwordConfirmation       The password confirmation
 *
 * @return {object}           The response data
 */
export function signupApi(email, password, passwordConfirmation) {
    let data = JSON.stringify({
        user: { 
            email,
            password,
            passwordConfirmation
        }
    })
    return axios({
            method: 'post',
            url: `${baseUrl}/api/users`,
            data: data,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(
            handleApiErrors
        ).then(
            response => response
        ).catch(
            error => { throw error }
        )
}

/**
 * Initiates user signin, returning a promise
 *
 * @param  {string} url                        The URL we want to request
 * @param  {string} email                      The email id of the  user
 * @param  {string} password                   The password of the user
 *
 * @return {object}           The response data
 */
export function loginApi(email, password) {
    const data = JSON.stringify({ 
        email,
        password,
        grant_type: "password"
    })
    return axios({
        method: 'post',
        url: `${baseUrl}/oauth/token`,
        data: data,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
        }).then(
            handleApiErrors
        ).then(
            response => response
        ).catch(
            error => { throw error }
        )
}