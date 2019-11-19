import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { ArrowTooltip } from '../Tooltip/ArrowTooltip';
import { AddOrEditBookDialog } from '../Dialogs/AddOrEditBookDialog';
import { DeleteBookDialog } from '../Dialogs/DeleteBookDialog';
import { DetailsBookDialog } from '../Dialogs/DetailsBookDialog';
import {
  bookPropTypesShape,
  subjectsPropTypes,
} from '../../propTypes/propTypes';
import {
  fetchPutBook,
  fetchDeleteBook,
} from '../../redux/books/actions';

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof Book
 * @private
 */
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    maxHeight: theme.spacing(16),
    border: 'solid 1px lightgrey',
    borderRadius: '3px',
    padding: 0,
  },
  image: {
    padding: 0,
    width: theme.spacing(10),
    height: theme.spacing(16) - 2,
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    objectFit: 'cover',
  },
  book: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    width: `calc(100% - ${theme.spacing(10)}px)`, // substract image width!
  },
  mediaIcon: {
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopLeftRadius: '3px',
    borderBottomRightRadius: '3px',
    position: 'absolute',
    left: '0px',
    top: '0px',
    flexGrow: 0,
    maxHeight: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),
    height: theme.spacing(16) - 2,
    minWidth: 0,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tools: {
    hight: '40%',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexGrow: 0,
  },
}));

/**
 * @class Book
 * @classdesc A book preview card in the register.
 * @param {Object} props               - The component props.
 * @property {Object} props.book       - The book represented by this component.
 * @property {Object} props.subjects   - The global subjects.
 * @property {Function} props.dispatch - The Redux dispatch function.
 */
export function BookComponent({
  book,
  subjects,
  dispatch,
}) {
  const classes = useStyles();

  const [openDetailsBookDialog, setOpenDetailsBooksDialog] = React.useState(false);
  const [openEditBookDialog, setOpenEditBookDialog] = React.useState(false);
  const [openDeleteBookDialog, setOpenDeleteBookDialog] = React.useState(false);

  function handleOpenDetailsBookDialogClick() {
    setOpenDetailsBooksDialog(true);
  }

  function handleOpenDetailsBookDialogClose() {
    setOpenDetailsBooksDialog(false);
  }

  function handleEditClick() {
    setOpenEditBookDialog(true);
  }

  function handleEditClose() {
    setOpenEditBookDialog(false);
  }

  function handleEditSave(newBook) {
    handleEditClose();
    dispatch(fetchPutBook(newBook));
  }

  function handleDeleteClick() {
    setOpenDeleteBookDialog(true);
  }

  function handleDeleteClose() {
    setOpenDeleteBookDialog(false);
  }

  function handleDeleteSave(id) {
    handleDeleteClose();
    dispatch(fetchDeleteBook(id));
  }

  return (
    <Fragment>
      <div className={classes.root}>
        <img src={book.img} alt="Book" className={classes.image} />
        <div className={classes.mediaIcon}>
          {book.media_type === 'Audio' && (
            <ArrowTooltip title="Audio book">
              <LibraryMusicIcon color="disabled" />
            </ArrowTooltip>
          )}
          {book.media_type !== 'Audio' && (
            <ArrowTooltip title="Text book">
              <LibraryBooksIcon color="disabled" />
            </ArrowTooltip>
          )}
        </div>
        <div className={classes.book}>
          <div className={classes.container}>
            <div className={classes.title}>
              <Typography
                color="secondary"
                align="left"
                display="block"
                component={'div'}
                noWrap
              >
                {book.title}
              </Typography>
            </div>

            <div>
              {(book.authors && book.authors.length > 0) && (
                <Typography
                  key={book.authors[0].name}
                  variant="body2"
                  color="textSecondary"
                  align="left"
                  display="block"
                  component={'div'}
                  noWrap
                >
                  <span className={classes.authors}>
                    {`${book.authors[0].name}${book.authors.length > 1 ? ' (more...)' : ''}`}
                  </span>
                </Typography>
              )}
            </div>

            <div className={classes.grow} />

            <div className={classes.tools}>
              <ArrowTooltip title="Open book details">
                <IconButton
                  onClick={handleOpenDetailsBookDialogClick}
                  aria-label="book details"
                >
                  <OpenInNewIcon />
                </IconButton>
              </ArrowTooltip>

              <ArrowTooltip title="Edit book">
                <IconButton
                  onClick={handleEditClick}
                  aria-label="edit book"
                >
                  <EditIcon />
                </IconButton>
              </ArrowTooltip>

              <ArrowTooltip title="Delete book">
                <IconButton
                  onClick={handleDeleteClick}
                  aria-label="delete book"
                >
                  <DeleteIcon />
                </IconButton>
              </ArrowTooltip>
            </div>
          </div>
        </div>
      </div>

      <DetailsBookDialog
        book={book}
        open={openDetailsBookDialog}
        subjects={subjects}
        handleOnClose={handleOpenDetailsBookDialogClose}
      />

      <AddOrEditBookDialog
        book={book}
        subjects={subjects}
        open={openEditBookDialog}
        handleOnCancel={handleEditClose}
        handleOnSave={handleEditSave}
      />

      <DeleteBookDialog
        id={book.id}
        title={book.title}
        authors={book.authors && book.authors.map(author => author.name)}
        open={openDeleteBookDialog}
        handleOnCancel={handleDeleteClose}
        handleOnDelete={handleDeleteSave}
      />
    </Fragment>
  );
}

BookComponent.propTypes = {
  book: bookPropTypesShape.isRequired,
  subjects: subjectsPropTypes.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export const Book = connect()(BookComponent);
