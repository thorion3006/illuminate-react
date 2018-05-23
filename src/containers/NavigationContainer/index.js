import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Navigation from '../../components/navigation'
import { userLogout, userLogin } from './actions';

class NavigationContainer extends PureComponent {

    static propTypes = {
        email: PropTypes.string,
        userLogout: PropTypes.func.isRequired
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            const storedToken = localStorage.getItem('token')
            const token = JSON.parse(storedToken)
            this.props.userLogin(token)
        }
    }

    render(){
        return <Navigation email = { this.props.email } onClick = {this.props.userLogout} />
    }
}

const mapStateToProps = state => ({
    email: state.user.email
})

const mapDispatchToProps = dispatch => ({
    userLogin: token => dispatch(userLogin(token)),
    userLogout: () => dispatch(userLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)