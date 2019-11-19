import React from 'react';
import * as colors from '@material-ui/core/colors';

/**
 * @module react-hook:random-colors
 * @desc A custom React hook to randomize Material-UI colors.
 */

/**
 * A selected/filtered list of Material-UI color names.
 * @memberof react-hook:random-colors
 * @type {string[]}
 * @private
 */
const COLORS = Object
  .keys(colors)
  .filter(colorName => (!(colorName === 'black' && colorName === 'white' && colorName === 'common')))
  .map(colorName => colors[colorName]);

/**
 * Randomizes Material-UI color.
 *
 * @returns {Object} - The random Material-UI color.
 * @memberof react-hook:random-colors
 * @private
 */
function randomizeAvatarColor() {
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  return randomColor;
}

/**
 * The React hook to chose a random color.
 *
 * @returns {Object} - The random Material-UI color.
 * @memberof react-hook:random-colors
 */
export function useRandomColor() {
  const [color] = React.useState(randomizeAvatarColor());
  return color;
}
