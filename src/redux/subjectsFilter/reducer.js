import {
  SET_SUBJECTS_FILTER,
  SHOW_SUBJECTS_ALL,
} from './actions';

/**
 * @module redux:subjects-filter-reducer
 * @desc This module provides the relevant Redux reducer to handle changes on `state.subjectsFilter`.
 */

/**
* The initial global Redux state for subjects filter.
* @memberof redux:subjects-filter-reducer
* @type {string}
* @private
*/
const initialState = SHOW_SUBJECTS_ALL;

/**
 * The subjects filter reducer to provide the next state.
 *
 * @param {Object} [state=All] - The global books state.
 * @param {Object} action      - The subjects filter action to handle.
 * @memberof redux:subjects-filter-reducer
 * @returns {Object} The next state.
 */
export function subjectsFilter(state = initialState, action) {
  switch (action.type) {
    case SET_SUBJECTS_FILTER:
      return action.filter;
    default:
      return state;
  }
}
