import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

/**
 * The style classes factory function.
 *
 * @param {Object} theme - The Material-UI theme reference.
 * @returns {Object} The styles object.
 * @memberof DialogTitleWithClose
 * @private
 */
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export const DialogTitleWithClose = withStyles(styles)((props) => {
  const {
    children,
    classes,
    onClose,
  } = props;

  return (
    <DialogTitle
      disableTypography={false}
      className={classes.root}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});
