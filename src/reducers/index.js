import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import issues from './visibleIssues';
import pages from './pages';
import url from './url'

const rootReducer = combineReducers({
  router: routerReducer,
  issues,
  pages,
  url
});

export default rootReducer;
