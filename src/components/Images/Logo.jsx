import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.svg';

/**
 * @class Logo
 * @classdesc The application's logo component.
 * @param {Object} props - The component props.
 * @property {string} className - The logo styles.
 */
export const Logo = ({ className }) => (
  <img
    className={className}
    src={Book}
    alt="logo"
  />
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};
