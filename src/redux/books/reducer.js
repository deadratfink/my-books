import {
  ADD_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  GET_ALL_BOOKS,
  FETCH_BOOKS,
} from './actions';

/**
 * @module redux:books-reducer
 * @desc This module provides the relevant Redux reducer to handle changes on `state.books`.
 */

/**
 * The initial global Redux state for books.
 * @memberof redux:books-reducer
 * @type {Object}
 * @private
 */
const initialState = {
  isFetching: false,
  hasError: false,
  books: [],
};

/**
 * The books reducer to provide the next state.
 *
 * @param {Object} [state]  - The global books state.
 * @param {Object} action - The books action to handle.
 * @memberof redux:books-reducer
 * @returns {Object} - The next state.
 */
export function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, {
        method: 'POST',
        isFetching: false,
        hasError: false,
        books: [...state.books, action.book].sort(),
      });
    case UPDATE_BOOK:
      // eslint-disable-next-line no-case-declarations
      const newBooks = state.books.filter(book => (book.id !== action.book.id));
      newBooks.push(action.book);
      return Object.assign({}, state, {
        method: 'PUT',
        isFetching: false,
        hasError: false,
        books: newBooks,
      });
    case DELETE_BOOK:
      return Object.assign({}, state, {
        method: 'DELETE',
        isFetching: false,
        hasError: false,
        books: state.books.filter(book => (book.id !== action.id)),
      });
    case GET_ALL_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: false,
        books: action.books.sort(),
      });
    case FETCH_BOOKS:
      if (action.status === 'error') {
        return Object.assign({}, state, {
          method: action.method,
          isFetching: false,
          hasError: action.hasError,
          error: action.error,
          books: [],
        });
      }
      return Object.assign({}, state, {
        isFetching: true,
      });
    default:
      return state;
  }
}
