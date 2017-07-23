import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import IssueDetails from './IssueDetails';
import App from '../components/App';
import DevTools from './DevTools';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App} />
        <Route path="/details/:issue" component={IssueDetails} />
        <Route path="/about" component={IssueDetails} />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Root;
