import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import IssueDetails from './IssueDetails';
import App from '../components/App';
import Header from '../components/Header';
import DevTools from './DevTools';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/details/:issue" render={()=><IssueDetails />} />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Root;
