import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger)
}

middlewareToBeApplied = applyMiddleware(...middleware)

store = createStore(reducers, composeWithDevTools(middlewareToBeApplied))

sagaMiddleware.run(rootSaga)

export default store
