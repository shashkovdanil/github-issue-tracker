import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from '../reducers'

const history = createHistory()
const router = routerMiddleware(history)

const configureStore = (initialState) =>
  createStore(rootReducer, initialState, applyMiddleware(thunk, router))

export default configureStore
