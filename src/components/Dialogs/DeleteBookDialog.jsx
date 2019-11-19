import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { DialogTitleWithClose } from './DialogTitleWithClose';

/**
 * @class DeleteBookDialog
 * @classdesc A (cancable) dialog to delete a book on user interaction. The dialog is responsive.
 * @param {Object} props                     - The dialog properties.
 * @property {number} props.id               - The book ID.
 * @property {string} props.title            - The book title.
 * @property {number[]} [props.authors]      - The names of book authors.
 * @property {boolean} props.open            - The initial dialog open state.
 * @property {Function} props.handleOnDelete - The book delete callback.
 * @property {Function} props.handleOnCancel - The cancel callback.
 */
export function DeleteBookDialog({
  id,
  title,
  authors,
  open,
  handleOnDelete,
  handleOnCancel,
}) {
  // make responsive!
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  /**
   * Internal delete handler. Calls `handleOnDelete(id)`.
   *
   * @private
   */
  function handleOnClickDelete() {
    handleOnDelete(id);
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleOnCancel}
      aria-labelledby="dialog-title"
    >
      <DialogTitleWithClose
        id="responsive-dialog-title"
        onClose={handleOnCancel}
      >
        {'Delete book...'}
        <Typography
          paragraph
          color="secondary"
          align="left"
        >
          <i>{title}</i>
        </Typography>
        {(authors && authors.length > 0) && (
          <Typography
            variant="body2"
            color="textSecondary"
            align="left"
          >
            {`(${authors.join(' and ')})`}
          </Typography>
        )}
      </DialogTitleWithClose>

      <DialogContent dividers>
        <Typography
          paragraph
          align="left"
        >
          This action cannot be reverted. Are you sure to delete the book?
          </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleOnCancel}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={handleOnClickDelete}
          color="primary"
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteBookDialog.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(String),
  open: PropTypes.bool.isRequired,
  handleOnDelete: PropTypes.func.isRequired,
  handleOnCancel: PropTypes.func.isRequired,
};
