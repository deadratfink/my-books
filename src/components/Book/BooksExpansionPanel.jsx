import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { useRandomColor } from '../../hooks/randomColor';
import { Books } from './Books';
import {
  booksPropTypes,
  subjectsPropTypes,
} from '../../propTypes/propTypes';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles(theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
    },
  },
  content: {
    // margin: `50 0`,
    '&$expanded': {
      margin: `${theme.spacing(1.5)} 0`,
    },
    // 'Mui-expanded': {
    //   margin: `${theme.spacing(1.5)} 0`,
    // },
  },
  expanded: {
    // margin: `50 50`,
  },
}))(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const useStyles = avatarColor =>
  makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    headingTitle: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    avatar: {
      backgroundColor: avatarColor[500] || red[500],
      marginRight: theme.spacing(2),
    },
    books: {
      marginTop: theme.spacing(4),
    },
  }));

const StyledBadge = withStyles(theme => ({
  badge: {
    top: '15%',
    right: 16,
    // The border color match the background color.
    border: `2px solid ${theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]}`,
  },
}))(Badge);

// TODO: of course, support for other alphabets!
/**
 * @class BooksExpansionPanel
 * @classdesc A panel which can expand to show several (filtered) books.
 * @param {Object} props                       - The component props.
 * @property {string} props.alphaBeticalFilter - The filter for the books to show.
 * @property {Object[]} props.books            - The books to filter and show.
 * @property {string} props.subjects           - The global subjects.
 * @property {string} [props.heading]          - An optional heading.
 */
export function BooksExpansionPanel({
  alphaBeticalFilter,
  books,
  subjects,
  heading,
}) {
  const classes = useStyles(useRandomColor())();

  let filteredBooks = books;
  if (alphaBeticalFilter) {
    if (alphaBeticalFilter === '#') {
      filteredBooks = books.filter(book => !book.title.match(/^[A-Za-z].*/i));
    } else {
      filteredBooks = books.filter(book => book.title.startsWith(alphaBeticalFilter));
    }
  }

  const disabled = filteredBooks.length === 0;

  const [expanded, setExpanded] = React.useState(false);

  /**
   * Needed to close itself once disabled by deletion of last book.
   *
   * @param {React.SyntheticEvent} event - The event on the panel (not used here!).
   * @param {boolean} newExpanded        - The new expansion state.
   * @private
   */
  function onChange(event, newExpanded) {
    if (disabled) {
      setExpanded(false);
    }
    setExpanded(newExpanded);
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel
        square
        onChange={onChange}
        expanded={expanded}
        disabled={disabled}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <div className={classes.heading}>
            {alphaBeticalFilter && (
              <StyledBadge
                color="secondary"
                badgeContent={filteredBooks.length}
              >
                <Avatar
                  aria-label="book"
                  className={classes.avatar}
                >
                  {alphaBeticalFilter}
                </Avatar>
              </StyledBadge>
            )}
            {heading && (
              <Typography className={classes.headingTitle}>
                {heading}
              </Typography>
            )}
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Books
            books={filteredBooks}
            subjects={subjects}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

BooksExpansionPanel.propTypes = {
  books: booksPropTypes.isRequired,
  subjects: subjectsPropTypes.isRequired,
  alphaBeticalFilter: PropTypes.string,
  heading: PropTypes.string,
};
