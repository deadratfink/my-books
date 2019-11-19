import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  useTheme,
  makeStyles,
} from '@material-ui/core/styles';

const EMPTY_FUNC = () => { };

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof ErrorDialog
 * @private
 */
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2),
  },
  icon: {
    color: 'red',
    marginRight: theme.spacing(1),
    fontSize: 64,
  },
}));

/**
 * @class ErrorDialog
 * @classdesc A dialog to show error status. The dialog is responsive.
 * @param {Object} props                     - The dialog properties.
 * @property {boolean} props.open - The initial dialog open state.
 * @property {Error} props.error  - The error occurred.
 */
export function ErrorDialog({
  open,
  error,
}) {
  const classes = useStyles();
  // make responsive!
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  /**
   * Internal reload handler.
   *
   * @private
   */
  function handleReload() {
    window.location.reload(true);
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={EMPTY_FUNC}
      aria-labelledby="dialog-title"
    >
      <DialogTitle id="dialog-title">
        <div className={classes.container}>
          <ErrorIcon className={classes.icon} />
          <div style={{ margin: 'auto' }}>
            <Typography
              component={'div'}
              color="error"
            >
              Error!
            </Typography>
          </div>
        </div>

      </DialogTitle >
      <DialogContent dividers>
        <Typography
          paragraph
          color="error"
          align="left"
        >
          {`Error: ${error.message}`}
        </Typography>
        <Typography
          paragraph
          color="error"
          align="left"
        >
          Try to reload...
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleReload}
          color="primary"
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        >
          Reload
        </Button>
      </DialogActions>
    </Dialog >
  );
}

ErrorDialog.defaultProps = {
  open: false,
};

ErrorDialog.propTypes = {
  open: PropTypes.bool,
  error: PropTypes.instanceOf(Error),
};
