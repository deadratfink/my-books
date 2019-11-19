import PropTypes from 'prop-types';

export const authorPropTypesShape = PropTypes.exact({
  birth_year: PropTypes.number,
  death_year: PropTypes.number,
  name: PropTypes.string.isRequired,
});

export const authorsPropTypes = PropTypes.arrayOf(authorPropTypesShape);

export const bookshelvesPropTypes = PropTypes.arrayOf(PropTypes.string);

export const languagesPropTypes = PropTypes.arrayOf(PropTypes.string);

export const subjectsPropTypes = PropTypes.arrayOf(PropTypes.string);

export const formatsPropTypesShape = PropTypes.exact({
  'image/jpeg': PropTypes.string,
  'text/plain; charset=utf-8': PropTypes.string,
  'text/plain; charset=us-ascii': PropTypes.string,
  'application/rdf+xml': PropTypes.string,
  'application/pdf': PropTypes.string,
  'application/x-mobipocket-ebook': PropTypes.string,
  'application/epub+zip': PropTypes.string,
  'text/html; charset=utf-8': PropTypes.string,
  'text/plain; charset=iso-8859-1': PropTypes.string,
  'application/zip': PropTypes.string,
  'application/prs.tex': PropTypes.string,
});

export const bookPropTypesShape = PropTypes.exact({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  authors: authorsPropTypes,
  bookshelves: bookshelvesPropTypes,
  download_count: PropTypes.number,
  formats: formatsPropTypesShape,
  languages: languagesPropTypes,
  media_type: PropTypes.oneOf(['Text', 'Audio']),
  subjects: subjectsPropTypes
});

export const booksPropTypes = PropTypes.arrayOf(bookPropTypesShape);
