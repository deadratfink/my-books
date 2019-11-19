import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import { ArrowTooltip } from '../Tooltip/ArrowTooltip';
import {
  SHOW_SUBJECTS_ALL,
  setCategoryFilter,
} from '../../redux/subjectsFilter/actions';
import {
  booksPropTypes,
  subjectsPropTypes,
} from '../../propTypes/propTypes';

const ALL = 'All';

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof SubjectList
 * @private
 */
const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  text: {
    margin: `${theme.spacing(0, 2)} ${theme.spacing(0, 0)}`,
  },
  badge: {
    margin: theme.spacing(1),
  },
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]}`,
  },
}))(Badge);

/**
 * @class SubjectList
 * @classdesc A list component to show the subjects and an all books item and assign book counts to these.
 * @param {Object} props              - The component props.
 * @property {string[]} props.subjects - The received subjects.
 * @property {Objects[]} props.books   - The received books.
 * @property {Function} props.dispatch - The Redux dispatch function.
 */
export function SubjectListComponent({
  subjects,
  books,
  dispatch,
}) {
  const classes = useStyles();

  const handleOnListItemClicked = text => (event) => {
    event.preventDefault();
    dispatch(setCategoryFilter(text === ALL ? SHOW_SUBJECTS_ALL : text));
  };

  return (
    <List>
      <ArrowTooltip title={'All Books'}>
        <ListItem
          button
          key={ALL}
          onClick={handleOnListItemClicked(ALL)}
        >
          <StyledBadge
            className={classes.badge}
            badgeContent={`${books.length}`}
            color="secondary"
            max={99}
          >
            <ListItemText
              className={classes.text}
              primary={ALL}
            />
          </StyledBadge>
        </ListItem>
      </ArrowTooltip>
      {/* <Divider /> */}
      {subjects.map((text, index) => (
        <ArrowTooltip key={index} title={`Books with subject ${text}`}>
          <ListItem
            button
            onClick={handleOnListItemClicked(text)}
          >
            <StyledBadge
              className={classes.badge}
              badgeContent={`${books.filter(book => (book.subjects && book.subjects.find(subject => (subject === text)))).length}`}
              color="primary"
              max={99}
            >
              <ListItemText
                className={classes.text}
                primary={`${text}`}
              />
            </StyledBadge>
          </ListItem>
        </ArrowTooltip>
      ))}
    </List>
  );
}

SubjectListComponent.propTypes = {
  books: booksPropTypes.isRequired,
  subjects: subjectsPropTypes.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subjects: state.subjects.subjects,
  books: state.books.books,
});

export const SubjectList = connect(mapStateToProps)(SubjectListComponent);
