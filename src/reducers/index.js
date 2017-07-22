import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import issues from './issues';
import pages from './pages'

const rootReducer = combineReducers({
  router: routerReducer,
  issues,
  pages
});

export default rootReducer;