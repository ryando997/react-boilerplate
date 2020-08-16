import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from 'app/redux/reducers';
import rootSaga from 'app/redux/sagas';

import createSagaMiddleware from 'redux-saga';

let composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();
const enhancers = [applyMiddleware(sagaMiddleware)];

if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  // NOTE: Uncomment the code below to restore support for Redux Saga
  // Dev Tools once it supports redux-saga version 1.x.x
  // if (window.__SAGA_MONITOR_EXTENSION__)
  //   reduxSagaMonitorOptions = {
  //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  //   };
  /* eslint-enable */
}

const configureStore = createStore(rootReducers, composeEnhancers(...enhancers));
sagaMiddleware.run(rootSaga);

export default configureStore;
