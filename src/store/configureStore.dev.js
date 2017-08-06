import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const reducers = require('../reducers')

const history = createHistory()
const router = routerMiddleware(history)

const enhancer = compose(applyMiddleware(thunk, router), DevTools.instrument())

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducers.default))
  }
  return store
}

export default configureStore
