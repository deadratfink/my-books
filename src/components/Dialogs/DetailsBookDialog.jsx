import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ISO6391 from 'iso-639-1';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { DialogTitleWithClose } from './DialogTitleWithClose';
import { fetchPutBook } from '../../redux/books/actions';
import { bookPropTypesShape } from '../../propTypes/propTypes';

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof DetailsBookDialog
 * @private
 */
const useStyles = makeStyles(theme => ({
  image: {
    padding: 0,
    marginTop: theme.spacing(1),
    marginLeft: 0,
    mariginBottom: 0,
    marginRight: 0,
    width: theme.spacing(10),
    height: theme.spacing(16),
    objectFit: 'cover',
  },
  grow: {
    flexGrow: 1,
  },
  authors: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  chip: {
    margin: theme.spacing(1),
    cursor: 'pointer',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1), // Reset browser default style.
  },
}));

/**
 * @class DetailsBookDialog
 * @classdesc A (cancable) dialog to show book details on user interaction. The dialog is responsive.
 * @param {Object} props                    - The dialog properties.
 * @property {number} props.book            - The book ID.
 * @property {number} props.open            - The initial dialog open state.
 * @property {Function} props.handleOnClose - The book delete callback.
 * @property {Function} props.dispatch      - The Redux dispatch function.
 *
 */
export function DetailsBookDialogComponent({
  book,
  open,
  handleOnClose,
  dispatch,
}) {
  const classes = useStyles();
  // make responsive!
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [downloadCount, setDownloadCount] = React.useState(book.download_count || 0);

  function openLink(url) {
    return function () {
      window.open(url);
      book.download_count = ++book.download_count; // eslint-disable-line no-plusplus
      setDownloadCount(book.download_count);
      dispatch(fetchPutBook(book));
    };
  }

  function createLink(url, text) {
    return (
      <Chip
        icon={<SaveAltIcon />}
        key={text}
        label={text}
        className={classes.chip}
        onClick={openLink(url)}
        clickable
        color="secondary"
      />
    );
  }

  function createFormatLink(mimetype, url) {
    switch (mimetype) {
      case 'image/jpeg':
        return createLink(url, 'IMAGE (JPEG)');
      case 'text/plain; charset=utf-8':
        return createLink(url, 'TEXT (UTF-8)');
      case 'text/plain; charset=us-ascii':
        return createLink(url, 'TEXT (US-ASCII)');
      case 'application/rdf+xml':
        return createLink(url, 'RDF (XML)');
      case 'application/pdf':
        return createLink(url, 'PDF');
      case 'application/x-mobipocket-ebook':
        return createLink(url, 'MOBIPOCKET');
      case 'application/epub+zip':
        return createLink(url, 'EPUB (ZIP)');
      case 'text/html; charset=utf-8':
        return createLink(url, 'HTML');
      case 'text/plain; charset=iso-8859-1':
        return createLink(url, 'TEXT (ISO-8859-1)');
      case 'application/zip':
        return createLink(url, 'ZIP');
      case 'application/prs.tex':
        return createLink(url, 'TEX');
      default:
        throw new Error(`unsupported format link mimetype '${mimetype}'`);
    }
  }

  function createFormatLinkList(formats) {
    if (formats) {
      const keys = Object.keys(formats);
      return keys.map(key => createFormatLink(key, formats[key]));
    }
    return [];
  }

  const formatLinks = createFormatLinkList(book.formats);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleOnClose}
      aria-labelledby="dialog-title"
    >
      <DialogTitleWithClose
        id="responsive-dialog-title"
        onClose={handleOnClose}
      >
        {'Book details...'}
        <Typography
          paragraph
          color="secondary"
          align="left"
        >
          <i>{book.title}</i>
        </Typography>

        <div>
          {(book.authors && book.authors.length > 0) && book.authors.map(author => (
            <Typography
              key={author.name}
              variant="body2"
              color="textSecondary"
              align="left"
              display="block"
              component={'div'}
              noWrap
            >
              <span className={classes.authors}>
                {`${author.name} (★ ${author.birth_year} | † ${author.death_year})`}
              </span>
            </Typography>
          ))}
        </div>
      </DialogTitleWithClose>

      <DialogContent dividers>
        <img
          src={book.img}
          alt="Book"
          className={classes.image}
        />
        <Divider
          light
          className={classes.divider}
        />

        <Typography
          paragraph
          gutterBottom
          component="h5"
        >
          Details
        </Typography>

        <Typography
          paragraph
          display={'block'}
          color="textSecondary"
          gutterBottom
        >
          Downloads: {downloadCount}
        </Typography>

        {book.media_type && (
          <Typography
            paragraph
            display={'block'}
            color="textSecondary"
            gutterBottom
          >
            Media Type: {book.media_type}
          </Typography>
        )}

        {(book.subjects && book.subjects.length > 0) && (
          <Typography
            paragraph
            display={'block'}
            color="textSecondary"
            gutterBottom
          >
            Subjects: {book.subjects.join(', ')}
          </Typography>
        )}

        {(book.languages && book.languages.length > 0) && (
          <Typography
            paragraph
            display={'block'}
            color="textSecondary"
            gutterBottom
          >
            Languages: {book.languages.map(isoCode => ISO6391.getName(isoCode))}
          </Typography>
        )}

        {(book.bookshelves && book.bookshelves.length > 0) && (
          <Typography
            paragraph
            display={'block'}
            color="textSecondary"
            gutterBottom
          >
            Bookshelves: {book.bookshelves.join(', ')}
          </Typography>
        )}

        {(formatLinks.length > 0) && (
          <Fragment>
            <Divider
              light
              className={classes.divider}
            />
            <Typography
              paragraph
              gutterBottom
              component="h5"
            >
              Formats
            </Typography>
            <List>
              {formatLinks}
            </List>
          </Fragment>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleOnClose}
          color="primary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DetailsBookDialogComponent.propTypes = {
  book: bookPropTypesShape.isRequired,
  open: PropTypes.bool,
  handleOnClose: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export const DetailsBookDialog = connect()(DetailsBookDialogComponent);
