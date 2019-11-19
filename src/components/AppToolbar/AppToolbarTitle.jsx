import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof AppToolbarTitle
 * @private
 */
const useStyles = makeStyles({
  title: {
    display: 'block',
  },
});

/**
 * @class AppToolbarTitle
 * @classdesc A toolbar application title.
 * @param {Obejct} props    - The component props.
 * @property {string} title - The title string.
 */
export function AppToolbarTitle({ title }) {
  const classes = useStyles();

  return (
    <Typography
      className={classes.title}
      variant="h6"
      noWrap
    >
      {title}
    </Typography>
  );
}

AppToolbarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
