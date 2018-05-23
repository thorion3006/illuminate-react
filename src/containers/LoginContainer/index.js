import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { loginRequest } from './actions'

import Login from '../../components/login'

class LoginContainer extends PureComponent {
    
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        loginRequest: PropTypes.func.isRequired,
        login: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.array,
        }),
    }

    submit = values => {
        this.props.loginRequest(values)
    }

    render(){

        const {
            handleSubmit,
            login: {
              requesting,
              successful,
              messages,
              errors,
            },
          } = this.props

        return <Login 
                    onSubmit={handleSubmit(this.submit)}
                    requesting={requesting}
                    successful={successful}
                    messages={messages}
                    errors={errors}
                />
    }
}

const mapStateToProps = state => ({  
    login: state.login,
})

const mapDispatchToProps = dispatch => ({
    loginRequest: user => dispatch(loginRequest(user))
})

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

const formedLogin = reduxForm({
    form: 'login',
})(connectedLogin)

export default formedLogin