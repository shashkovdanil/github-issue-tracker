import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { injectGlobal } from 'styled-components'

import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import Root from './containers/Root'
import globalStyle from './globalStyle'

injectGlobal`${globalStyle}`; // eslint-disable-line

const history = createHistory()
const store = configureStore()

render(<Root store={store} history={history} />, document.getElementById('root'))
registerServiceWorker()
