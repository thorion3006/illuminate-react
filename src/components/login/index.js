import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { FormGroup, Form, Button, Col, ControlLabel } from 'react-bootstrap'

import Messages from '../notifications/Messages'  
import Errors from '../notifications/Errors'

const Login = props => (
    <div className="login">
        <h1>Log In</h1>
        <Form horizontal onSubmit = {props.onSubmit} >
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <Field
                        name="email"
                        type="text"
                        id="email"
                        className="form-control"
                        label="Email"
                        component="input"
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <Field
                        name="password"
                        type="password"
                        id="password"
                        className="form-control"
                        label="Password"
                        component="input"
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={2} sm={10}>
    <               Button type="submit">Log In</Button>
                </Col>
            </FormGroup>
        </Form>
        <div className="auth-messages">
            {!props.requesting && !!props.errors.length && (
            <Errors message="Failure to login due to:" errors={props.errors} />
            )}
            {!props.requesting && !!props.messages.length && (
            <Messages messages={props.messages} />
            )}
            {!props.requesting && !props.successful && (
            <Link to="/signup">Need to sign up? Click Here »</Link>
            )}
        </div>
    </div>
)

Login.propTypes = {
    handleSubmit: PropTypes.func,
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
    messages: PropTypes.array.isRequired,
    errors: PropTypes.array.isRequired,
}

export default Login