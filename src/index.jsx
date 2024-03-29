import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './components/App/App';
import { reduxStore } from './redux/store';
import * as serviceWorker from './serviceWorker';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

/**
 * @module react:index
 * @desc This module is the application entry point initializing the Redux store and the React app.
 */

ReactDOM.render((
  <ErrorBoundary>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </ErrorBoundary>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
