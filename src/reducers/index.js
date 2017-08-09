// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import issues from './issues'
import pages from './pages'
import details from './details'

const rootReducer = combineReducers({
  router: routerReducer,
  issues,
  pages,
  details
})

export default rootReducer
