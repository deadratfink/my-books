import { SubjectApi } from '../../apis/subjectApi';

/**
 * @module redux:subject-actions
 * @desc This module provides all relevant Redux actions to handle changes on `state.subjects`.
 */

/**
 * The subjects API client.
 * @memberof redux:subject-actions
 * @private
 */
const subjectApi = new SubjectApi();

/*
 * action types
 */

/**
 * The action constant for signaling an `aysnc` fetch operation on subjects(s).
 * @memberof redux:subject-actions
 * @type {string}
 * @constant
 */
export const FETCH_SUBJECTS = 'FETCH_SUBJECTS';

/**
 * The action constant for getting all subjects.
 * @memberof redux:subject-actions
 * @type {string}
 * @constant
 */
export const GET_ALL_SUBJECTS = 'GET_ALL_SUBJECTS';

/*
 * action creators
 */

/**
 * An action creator to update the state with received subjects.
 *
 * @param {string[]} subjects - All received subjects.
 * @returns {Object} The action.
 * @memberof redux:subjects-actions
 */
export function getAllSubjects(subjects) {
  return {
    type: GET_ALL_SUBJECTS,
    subjects,
  };
}

/**
 * An action creator to notify when a subjects related fetch ist started.
 *
 * @param {string} method - The HTTP method type.
 * @returns {Object} The action.
 * @memberof redux:subjects-actions
 */
export function startFetchSubjects(method) {
  return {
    type: 'FETCH_SUBJECTS',
    method,
  };
}

/**
 * An action creator to update the state with whenever an error occurred while a subjects related fetch action.
 *
 * @param {Error} error - The error received.
 * @returns {Object} The action.
 * @memberof redux:subjects-actions
 */
export function erroredFetchSubjects(error) {
  return {
    status: 'error',
    type: 'FETCH_SUBJECTS',
    hasError: true,
    error,
  };
}

/*
 * Thunk actions
 */

/**
 * Thunk action which gets all subjects from the API/DB.
 *
 * @memberof redux:subject-actions
 * @resolve {Object[]}
 * @reject {Error}
 */
export function fetchGetAllSubjects() {
  return function (dispatch) { // eslint-disable-line func-names
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(startFetchSubjects('GET'));
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return subjectApi.getAll()
      .then(
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        result => dispatch(getAllSubjects(result)),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => dispatch(erroredFetchSubjects(error))
      );
  };
}
