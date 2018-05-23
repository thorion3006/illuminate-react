import { combineReducers } from 'redux'  
import { reducer as form } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import user from '../containers/NavigationContainer/reducer'
import signup from '../containers/SignupContainer/reducer'
import login from '../containers/LoginContainer/reducer'

const IndexReducer = combineReducers({  
  form,
  router: routerReducer,
  user,
  signup,
  login
})

export default IndexReducer