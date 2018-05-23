import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import Link from 'react-router-dom/Link';

const Navigation = ({ email, onClick }) => {
    const login = email? (
        <Fragment>
            <Navbar.Text>
                signed in as: { email }
            </Navbar.Text>
            <Navbar.Text onClick={onClick}>
                Sign Out
            </Navbar.Text>
        </Fragment>
    ) : (
        <Fragment>
            <NavItem eventKey={1} href = "/login" >
                Sign In
            </NavItem>
            <NavItem eventKey={2} href = "/signup" >
                Sign Up
            </NavItem>
        </Fragment>
    )
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to = "/" >Illuminate</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    { login }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

Navigation.propTypes = {
    email: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Navigation