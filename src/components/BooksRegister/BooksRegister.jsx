import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
import { BooksExpansionPanel } from '../Book/BooksExpansionPanel';
import {
  booksPropTypes,
  subjectsPropTypes,
} from '../../propTypes/propTypes';
import { SHOW_SUBJECTS_ALL } from '../../redux/subjectsFilter/actions';

const SIDEBAR_WIDTH = 150;

/**
 * The style classes factory function.
 * @returns {Object} The styles object.
 * @memberof BooksRegister
 * @private
 */
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
    padding: theme.spacing(0),
  },
  panels: {
    marginBottom: theme.spacing(0),
  },
  toolbar: theme.mixins.toolbar,
}));

// # != [A-Za-z]
/**
 * The alphabet for the register.
 * @type {string[]}
 * @constant
 * @memberof BooksRegister
 * @private
 */
const ALPHABET = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/**
 * @class BooksRegister
 * @classdesc A component which shows books like a register.
 * @param {Object} props         - The component props.
 * @property {Object[]}          - The books to show.
 * @property {string[]} subjects - The global subjects.
 */
export function BooksRegisterComponent({ books, subjects }) {
  const classes = useStyles();

  /**
   * Creates an expansion panel for each book t ocollect them in the register.
   *
   * @memberof BooksRegister
   * @private
   */
  function createBookExpansionPanels() {
    return ALPHABET.map(character => (
      <div
        key={character}
        className={classes.panels}
      >
        <BooksExpansionPanel
          alphaBeticalFilter={character}
          books={books}
          subjects={subjects}
        />
      </div>
    ));
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.container}>
        {createBookExpansionPanels()}
      </div>
    </main>
  );
}

BooksRegisterComponent.propTypes = {
  books: booksPropTypes.isRequired,
  subjects: subjectsPropTypes.isRequired,
};

const getBooksBySelectedSubject = (books, selectedSubject) => {
  if (selectedSubject !== SHOW_SUBJECTS_ALL) {
    return books.filter(book => (book.subjects && book.subjects.find(subject => (subject === selectedSubject))));
  }
  return books;
};

const mapStateToProps = (state) => {
  return {
    books: getBooksBySelectedSubject(state.books.books, state.subjectsFilter),
    subjects: state.subjects.subjects,
  };
};

export const BooksRegister = connect(mapStateToProps)(BooksRegisterComponent);
