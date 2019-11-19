import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

/**
 * @class SideBarToggleButton
 * @classdesc An icon action button component to toggle the sidebar.
 * @param {Object} props                     - The component props.
 * @property {Function} props.onClickHandler - The click handler for toggeling.
 */
export function SideBarToggleButton({ onClickHandler }) {
  const classes = useStyles();
  return (
    <IconButton
      color="inherit"
      aria-label="open subjects drawer"
      edge="start"
      onClick={onClickHandler}
      className={classes.menuButton}
    >
      <MenuIcon />
    </IconButton>
  );
}

SideBarToggleButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};
