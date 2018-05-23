import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { signupRequest } from './actions'

import Signup from '../../components/signUp'

class SignupContainer extends PureComponent {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        signupRequest: PropTypes.func.isRequired,
        signup: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.array,
        }),
    }

    submit = values => {
        this.props.signupRequest(values)
    }

    render(){

        const {
            handleSubmit,
            signup: {
              requesting,
              successful,
              messages,
              errors,
            },
          } = this.props

        return <Signup 
                    onSubmit={handleSubmit(this.submit)}
                    requesting={requesting}
                    successful={successful}
                    messages={messages}
                    errors={errors}
                />
    }
}

const mapStateToProps = state => ({  
    signup: state.signup,
})

const mapDispatchToProps = dispatch => ({
    signupRequest: user => dispatch(signupRequest(user))
})

const connectedSignup = connect(mapStateToProps, mapDispatchToProps)(SignupContainer)

const formedSignup = reduxForm({
    form: 'signup',
})(connectedSignup)

export default formedSignup