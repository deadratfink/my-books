import {
  GET_ALL_SUBJECTS,
  FETCH_SUBJECTS,
} from './actions';

/**
 * @module redux:subjects-reducer
 * @desc This module provides the relevant Redux reducer to handle changes on `state.subjects`.
 */

/**
 * The initial global Redux state for subjects.
 * @memberof redux:subjects-reducer
 * @type {Object}
 * @private
 */
const initialState = {
  isFetching: false,
  hasError: false,
  subjects: [],
};

/**
 * The subjects reducer to provide the next state.
 *
 * @param {Object} [state] - The global books state.
 * @param {Object} action  - The subjects action to handle.
 * @memberof redux:subjects-reducer
 * @returns {Object} The next state.
 */
export function subjects(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SUBJECTS:
      return Object.assign({}, state, {
        hasError: false,
        isFetching: false,
        subjects: action.subjects,
      });
    case FETCH_SUBJECTS:
      if (action.status === 'error') {
        return Object.assign({}, state, {
          method: action.method,
          hasError: action.hasError,
          error: action.error,
          isFetching: false,
          subjects: [],
        });
      }
      return Object.assign({}, state, {
        isFetching: true,
      });
    default:
      return state;
  }
}
