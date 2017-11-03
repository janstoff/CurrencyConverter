import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import reducers from '../reducers'

const middleware = []
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger)
}

middlewareToBeApplied = applyMiddleware(...middleware)

store = createStore(reducers, composeWithDevTools(middlewareToBeApplied))

export default store
