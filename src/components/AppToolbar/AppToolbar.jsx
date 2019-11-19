import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ArrowTooltip } from '../Tooltip/ArrowTooltip';
import { Logo } from '../Images/Logo';
import { SideBarToggleButton } from '../SideBar/SideBarToggleButton';
import { AppToolbarTitle } from './AppToolbarTitle';
import { AddOrEditBookDialog } from '../Dialogs/AddOrEditBookDialog';
import { fetchPostBook } from '../../redux/books/actions';
import { subjectsPropTypes } from '../../propTypes/propTypes';

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof AppToolbar
 * @private
 */
const useStyles = makeStyles(theme => ({
  logo: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
  buttonIcon: {
    color: 'white',
  }
}));

/**
 * @class AppToolbar
 * @classdesc An app toolbar.
 * @param {Object} props                          - The component props.
 * @property {string[]} props.subjects            - The global subjects.
 * @property {Function} props.handleSideBarToggle - The sidebar toggle function.
 */
export function AppToolbarComponent({
  subjects,
  handleSideBarToggle,
  dispatch,
}) {
  const classes = useStyles();

  const [openAddBookDialog, setOpenAddBookDialog] = React.useState(false);

  function handleAddBookClick() {
    setOpenAddBookDialog(true);
  }

  function handleAddBookClose() {
    setOpenAddBookDialog(false);
  }

  function handleAddBookSave(book) {
    handleAddBookClose();
    dispatch(fetchPostBook(book));
  }

  return (
    <Toolbar>
      <SideBarToggleButton onClickHandler={handleSideBarToggle} />
      <Logo className={classes.logo} />
      <AppToolbarTitle title={'MyBooks'} />
      <div className={classes.grow} />

      <ArrowTooltip title="Add new book">
        <IconButton
          onClick={handleAddBookClick}
          aria-label="add book"
        >
          <AddCircleIcon className={classes.buttonIcon} />
        </IconButton>
      </ArrowTooltip>

      <AddOrEditBookDialog
        open={openAddBookDialog}
        subjects={subjects}
        handleOnCancel={handleAddBookClose}
        handleOnSave={handleAddBookSave}
      />
    </Toolbar>
  );
}

AppToolbarComponent.propTypes = {
  handleSideBarToggle: PropTypes.func.isRequired,
  subjects: subjectsPropTypes.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ subjects: state.subjects.subjects });

export const AppToolbar = connect(mapStateToProps)(AppToolbarComponent);
