import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SideBarContent } from './SideBarContent';

/**
 * @class SideBar
 * @classdesc The sidebar to select subjects for books.
 * @param {props} props                      - The component props.
 * @property {number} props.width            - The sidebbar width.
 * @property {boolean} props.mobileOpen      - TODO
 * @property {Function} props.onCloseHandler - The on close handler callback
 */
export function SideBar({
  width,
  mobileOpen,
  onCloseHandler,
}) {
  const useStyles = makeStyles(theme => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width,
    },
    toolbar: theme.mixins.toolbar,
  }));

  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="book subjects">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          // container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={onCloseHandler}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <SideBarContent />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <SideBarContent />
        </Drawer>
      </Hidden>
    </nav>
  );
}

SideBar.propTypes = {
  width: PropTypes.number.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
};
