import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { reducers as rootReducer } from './reducers';

/**
 * @module redux:store
 * @desc This module creates and provides the Redux store.
 */

/**
 * A Redux logger middleware applied to store logging the state on console.
 * @memberof redux:store
 * @private
 */
const loggerMiddleware = createLogger();

/**
 * The Redux store.
 * @memberof redux:store
 */
export const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  )
);
