import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  useTheme,
  makeStyles,
} from '@material-ui/core/styles';

/**
 * Empty function.
 *
 * @type {Function}
 * @constant
 * @private
 * @memberof LoadingDialog
 */
const EMPTY_FUNC = () => { };

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof LoadingDialog
 * @private
 */
const useStyles = makeStyles(theme => ({
  progress: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2),
  }
}));

/**
 * @class LoadingDialog
 * @classdesc A dialog to show loading and/or error status. The dialog is responsive.
 * @param {Object} props                     - The dialog properties.
 * @property {number} props.id               - The book ID.
 * @property {number} props.title            - The book title.
 * @property {number} props.authors          - The book authors.
 * @property {number} props.open             - The initial dialog open state.
 * @property {Function} props.handleOnDelete - The book delete callback.
 * @property {Function} props.handleOnCancel - The cancel callback.
 */
export function LoadingDialogComponent({
  open,
  booksMethod,
  isBooksFetch,
  isBooksError,
  booksError,
  subjectsMethod,
  isSubjectsFetch,
  isSubjectsError,
  subjectsError,
}) {
  // delegate to error dialog via error boundary!
  if (isSubjectsError || isBooksError) {
    const err = booksError || subjectsError;
    throw err;
  }

  const classes = useStyles();
  // make responsive!
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function mapMethodToMessageAction(method) {
    switch (method) {
      case 'DELETE':
        return 'Deleting';
      case 'PATCH':
      case 'PUT':
        return 'Updating';
      case 'POST':
        return 'Saving';
      case 'GET':
      default:
        return 'Loading';
    }
  }

  function mapMethodToMessageBookItem(method) {
    switch (method) {
      case 'DELETE':
      case 'PATCH':
      case 'PUT':
      case 'POST':
        return 'book';
      case 'GET':
      default:
        return 'books';
    }
  }

  function isBothFetch() {
    return isBooksFetch && isSubjectsFetch;
  }

  function createSubjectsItem() {
    return (isSubjectsFetch ? ' subjects' : '');
  }

  function createMessageItem() {
    if (isBothFetch()) {
      return ' books and subjects';
    }
    return (isBooksFetch ? ` ${mapMethodToMessageBookItem(booksMethod)}` : createSubjectsItem());
  }

  /**
   * Creates the dialog title action message part.
   *
   * @returns {string} The action message part.
   * @private
   */
  function createMessageAction() {
    return mapMethodToMessageAction(booksMethod || subjectsMethod);
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={EMPTY_FUNC}
      aria-labelledby="dialog-title"
    >
      <DialogTitle id="dialog-title">
        <Typography
          component={'div'}
          color="primary"
          align="left"
        >
          {`${createMessageAction()}${createMessageItem()}...`}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.progress}>
          <CircularProgress disableShrink />
        </div>
      </DialogContent>
    </Dialog>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.books.isFetching || state.subjects.isFetching ||
      state.books.isBooksError || state.subjects.isSubjectsError,
    booksMethod: state.books.method,
    isBooksFetch: state.books.isFetching,
    isBooksError: state.books.hasError,
    booksError: state.books.error,
    subjectsMethod: state.subjects.method,
    isSubjectsFetch: state.subjects.isFetching,
    isSubjectsError: state.subjects.hasError,
    subjectsError: state.subjects.error,
  };
};

LoadingDialogComponent.defaultProps = {
  open: false,
};

LoadingDialogComponent.propTypes = {
  open: PropTypes.bool,
  booksMethod: PropTypes.string,
  isBooksFetch: PropTypes.bool,
  isBooksError: PropTypes.bool,
  booksError: PropTypes.instanceOf(Error),
  subjectsMethod: PropTypes.string,
  isSubjectsFetch: PropTypes.bool,
  isSubjectsError: PropTypes.bool,
  subjectsError: PropTypes.instanceOf(Error),
};

export const LoadingDialog = connect(mapStateToProps)(LoadingDialogComponent);
