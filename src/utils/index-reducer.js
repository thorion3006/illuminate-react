import { combineReducers } from 'redux'  
import { reducer as form } from 'redux-form'
import { routerReducer, push } from 'react-router-redux'

const IndexReducer = combineReducers({  
  form,
  router: routerReducer
})

export default IndexReducer