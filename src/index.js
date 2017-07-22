import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import Root from './containers/Root';

import './index.css';

const history = createHistory();
const store = configureStore();

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
registerServiceWorker();
