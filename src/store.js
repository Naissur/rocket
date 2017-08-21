import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';

import reducers from './reducers';
import mySaga from './sagas';


const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(mySaga);

export default store;
