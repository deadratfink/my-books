/**
 * @module redux:subjects-filter-actions
 * @desc This module provides all relevant Redux actions to handle changes on `state.subjectsFilter`.
 */

/*
 * action types
 */

export const SET_SUBJECTS_FILTER = 'SET_SUBECTS_FILTER';
export const SHOW_SUBJECTS_ALL = 'All';

/*
 * action creators
 */

/**
 * TODO
 *
 * @param {string} subject - The subject to filter for.
 */
export function setCategoryFilter(subject) {
  return {
    type: SET_SUBJECTS_FILTER,
    filter: subject,
  };
}
