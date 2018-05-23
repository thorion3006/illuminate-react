import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

import checkAuthorization from '../../utils/check-auth'

export const ProtectedRoute = ({component: ComposedComponent, ...rest}) => {

    class Authentication extends Component {

        // redirect if not authenticated; otherwise, return the component imputted into <ProtectedRoute />
        handleRender(props) {
            if (!this.props.authenticated) {
                return <Redirect to={{
                    pathname: '/login',
                    state: {
                    from: props.location,
                    message: 'You need to sign in'
                }
            }}/>
            } else {
                return <ComposedComponent {...props}/>
            }
        }

        render() {
            return (
                <Route {...rest} render={this.handleRender.bind(this)}/>
            )
        }
    }

    const mapStateToProps = state => {
        const authenticated = checkAuthorization(state)
        return {authenticated, user: state.user}
    }

  const AuthenticationContainer = connect(mapStateToProps)(Authentication)
  return <AuthenticationContainer/>
}