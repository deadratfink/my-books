import { BookApi } from '../../apis/bookApi';

/**
 * @module redux:book-actions
 * @desc This module provides all relevant Redux actions to handle changes on `state.books`.
 */

/**
 * The books API client.
 * @memberof redux:book-actions
 * @private
 */
const bookApi = new BookApi();

/*
 * action types
 */

/**
 * The action constant for adding a book.
 * @memberof redux:book-actions
 * @type {string}
 * @constant
 */
export const ADD_BOOK = 'ADD_BOOK';

/**
 * The action constant for updating a book.
 * @memberof redux:book-actions
 * @type {string}
 * @constant
 */
export const UPDATE_BOOK = 'UPDATE_BOOK';

/**
 * The action constant for deleting a book.
 * @memberof redux:book-actions
 * @type {string}
 * @constant
 */
export const DELETE_BOOK = 'DELETE_BOOK';

/**
 * The action constant for signaling an `aysnc` fetch operation on book(s).
 * @memberof redux:book-actions
 * @type {string}
 * @constant
 */
export const FETCH_BOOKS = 'FETCH_BOOKS';

/**
 * The action constant for getting all books.
 * @memberof redux:book-actions
 * @type {string}
 * @constant
 */
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';

/*
 * action creators
 */

/**
 * An action creator to update the state with an added book.
 *
 * @param {Object} book - The new book.
 * @returns {Object} The add book action.
 * @memberof redux:book-actions
 */
export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

/**
 * An action creator to update the state with an updated book.
 *
 * @param {Object} book - The updated book.
 * @returns {Object} The action.
 * @memberof redux:book-actions
 */
export function updateBook(book) {
  return {
    type: UPDATE_BOOK,
    book,
  };
}

/**
 * An action creator to update the state with a deleted book.
 *
 * @param {string} id - The ID of the deleted book.
 * @returns {Object} The action.
 * @memberof redux:book-actions
 */
export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id,
  };
}

/**
 * An action creator to update the state with received books.
 *
 * @param {string[]} books - All received books.
 * @returns {Object} The action.
 * @memberof redux:book-actions
 */
export function getAllBooks(books) {
  return {
    type: GET_ALL_BOOKS,
    books,
  };
}

/**
 * An action creator to notify when a books related fetch ist started.
 *
 * @param {string} method - The HTTP method type.
 * @returns {Object} The action.
 * @memberof redux:book-actions
 */
export function startFetchBooks(method) {
  return {
    type: 'FETCH_BOOKS',
    method,
  };
}

/**
 * An action creator to update the state with whenever an error occurred while a books related fetch action.
 *
 * @param {Error} error - The error received.
 * @returns {Object} The action.
 * @memberof redux:book-actions
 */
export function erroredFetchBooks(error) {
  return {
    status: 'error',
    type: 'FETCH_BOOKS',
    hasError: true,
    error,
  };
}

/*
 * Thunk actions
 */

/**
 * Thunk action which gets all books from the API/DB.
 *
 * @memberof redux:book-actions
 * @resolve {Object[]}
 * @reject {Error}
 */
export function fetchGetAllBooks() {
  return function (dispatch) { // eslint-disable-line func-names
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(startFetchBooks('GET'));
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return bookApi.getAll()
      .then(
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        result => dispatch(getAllBooks(result)),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => dispatch(erroredFetchBooks(error))
      );
  };
}

/**
 * Thunk action which creates a new book in React store and the API/DB.
 *
 * @param {Object} book - The new book to store.
 * @memberof redux:book-actions
 * @resolve {void}
 * @reject {Error}
 */
export function fetchPostBook(book) {
  return function (dispatch) { // eslint-disable-line func-names
    dispatch(startFetchBooks('POST'));
    return bookApi.post(book)
      .then(
        (id) => {
          book.id = id;
          return dispatch(addBook(book));
        },
        error => dispatch(erroredFetchBooks(error))
      );
  };
}

/**
 * Thunk action which updates an existing book with given ID in React store and the API/DB.
 *
 * @param {Object} book - The book to update.
 * @memberof redux:book-actions
 * @resolve {void}
 * @reject {Error}
 */
export function fetchPutBook(book) {
  return function (dispatch) { // eslint-disable-line func-names
    dispatch(startFetchBooks('PUT'));
    return bookApi.put(book.id, book)
      .then(
        () => dispatch(updateBook(book)),
        error => dispatch(erroredFetchBooks(error))
      );
  };
}

/**
 * Thunk action which patches an existing book with given ID in React store and the API/DB.
 *
 * @param {Object} book        - The book to patch.
 * @param {Object} patchObject - The patch part for the book to patch.
 * @memberof redux:book-actions
 * @resolve {void}
 * @reject {Error}
 */
export function fetchPatchBook(book, patchObject) {
  return function (dispatch) { // eslint-disable-line func-names
    dispatch(startFetchBooks('PATCH'));
    return bookApi.patch(book.id, patchObject)
      .then(
        result => dispatch(updateBook(result)),
        error => dispatch(erroredFetchBooks(error))
      );
  };
}

/**
 * Thunk action which deletes a book with given ID in React store and the API/DB.
 *
 * @param {number} id - The ID of he book.
 * @memberof redux:book-actions
 * @resolve {void}
 * @reject {Error}
 */
export function fetchDeleteBook(id) {
  return function (dispatch) { // eslint-disable-line func-names
    dispatch(startFetchBooks('DELETE'));
    return bookApi.delete(id)
      .then(
        resultId => dispatch(deleteBook(resultId)),
        error => dispatch(erroredFetchBooks(error))
      );
  };
}
