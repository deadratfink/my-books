import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SideBar } from '../SideBar/SideBar';
import { AppToolbar } from '../AppToolbar/AppToolbar';
import { BooksRegister } from '../BooksRegister/BooksRegister';
import { fetchGetAllSubjects } from '../../redux/subjects/actions';
import { fetchGetAllBooks } from '../../redux/books/actions';
import { LoadingDialog } from '../Dialogs/LoadingDialog';

/**
 * The sidebar width in px.
 * @type {number}
 * @memberof App
 * @constant
 * @private
 */
const SIDEBAR_WIDTH = 150;

/**
 * The style classes factory function.
 *
 * @param {Object} theme - The Material-UI theme reference.
 * @returns {Object} The styles object.
 * @memberof App
 * @private
 */
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginLeft: SIDEBAR_WIDTH,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
    },
  },
});

/**
 * @class App
 * @classdesc The application entry point.
 */
export class AppComponent extends PureComponent {
  state = {
    sideBarMobileOpen: false,
  };

  /**
   * Fetches all required data (books and subjects) on mount.
   *
   * @private
   */
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGetAllBooks());
    dispatch(fetchGetAllSubjects());
  }

  /**
   * Toogles the sidebar.
   *
   * @private
   */
  handleSideBarToggle = () => {
    this.setState({ sideBarMobileOpen: !this.state.sideBarMobileOpen });
  }

  /**
   * Render lifecycle.
   *
   * @private
   */
  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />

        <AppBar
          position="fixed"
          className={this.props.classes.appBar}
        >
          <AppToolbar handleSideBarToggle={this.handleSideBarToggle} />
        </AppBar>

        <SideBar
          width={SIDEBAR_WIDTH}
          mobileOpen={this.state.sideBarMobileOpen}
          onCloseHandler={this.handleSideBarToggle}
        />

        <BooksRegister />

        <LoadingDialog />
      </div >
    );
  }
}

AppComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export const App = withStyles(styles)(connect()(AppComponent));
