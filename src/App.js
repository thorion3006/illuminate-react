import React from 'react'
import PropTypes from 'prop-types'

import Navigation from './containers/NavigationContainer'

import './App.css'

const App = props => (  
  <div className="App">
    <Navigation />
    { React.Children.toArray(props.children) }
  </div>
)

App.propTypes = {  
  children: PropTypes.node,
}

export default App
