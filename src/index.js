import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'  
import { Provider } from 'react-redux'  
import createSagaMiddleware from 'redux-saga'  
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware as router } from 'react-router-redux'
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';

// Import the index reducer and sagas
import IndexReducer from './utils/index-reducer'  
import IndexSagas from './utils/index-sagas'

// Import all of our components
import App from './App'
import {ProtectedRoute} from './containers/ProtectedRouteContainer'
import Dashboard from './components/dashboard' 
import Login from './containers/LoginContainer'  
import Signup from './containers/SignupContainer'
import NoMatch from './components/noMatch'

// Other Imports
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import registerServiceWorker from './registerServiceWorker'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddleware = router(history)

// Build the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware()

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

// Setup Store
const store = createStore(  
    IndexReducer,
    composeSetup(applyMiddleware(routerMiddleware, sagaMiddleware)), // allows redux devtools to watch sagas
  )
  
// Begin our Index Saga
sagaMiddleware.run(IndexSagas)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history = {history}>
            <App>
                <Switch>
                    <Redirect from = "/" exact to = "/dashboard" />
                    <ProtectedRoute path = "/dashboard" component = {Dashboard} />
                    <Route path = "/login" component = {Login} />
                    <Route path = "/signup" component = {Signup} />
                    <Route component = {NoMatch} />
                </Switch>
            </App>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
