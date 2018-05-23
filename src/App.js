import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Jumbotron } from 'react-bootstrap'

import Navigation from './containers/NavigationContainer'

const App = props => (  
  <Grid>
    <Navigation />
    <Jumbotron>
    { React.Children.toArray(props.children) }
    </Jumbotron>
  </Grid>
)

App.propTypes = {  
  children: PropTypes.node,
}

export default App
