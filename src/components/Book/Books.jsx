import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  booksPropTypes,
  subjectsPropTypes,
} from '../../propTypes/propTypes';
import { Book } from './Book';

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof Books
 * @private
 */
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    backgroundColor: 'none',
  },
  book: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
}));

/**
 * @class Books
 * @classdesc A component to show a list of books.
 * @param {Object} props               - The component props.
 * @property {Object[]} props.books    - The books to list.
 * @property {string[]} props.subjects - The global subjects.
 */
export function Books({
  books,
  subjects,
}) {
  const classes = useStyles();

  /**
   * Creates the list of books.
   *
   * @returns {JSX} The book list.
   * @memberof Books
   * @private
   */
  function createBookList() {
    return books.map(book => (
      <div
        key={book.id}
        className={classes.book}
      >
        <Book
          book={book}
          subjects={subjects}
        />
      </div>
    ));
  }

  return (
    <div className={classes.root}>
      {createBookList()}
    </div>
  );
}

Books.propTypes = {
  books: booksPropTypes.isRequired,
  subjects: subjectsPropTypes.isRequired,
};
