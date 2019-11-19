import { combineReducers } from 'redux';
import { books } from './books/reducer';
import { subjects } from './subjects/reducer';
import { subjectsFilter } from './subjectsFilter/reducer';

/**
 * @module redux:reducers
 * @desc This module provides the _combined_ reducers for the Redux store.
 */

/**
 * The combined Redux reducers.
 * @memberof redux:reducers
 */
export const reducers = combineReducers({
  books,
  subjects,
  subjectsFilter,
});
