import React from 'react';
import { Provider } from 'react-redux';
import '@storybook/addon-console';
import '@storybook/addon-actions';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import Package from '../package.json';
import { reduxStore } from '../src/redux/store';

/**
 * @module storybook:configuration
 * @description Provides the storybook configuration loading all stories.
 */

addDecorator(storyFn => <Provider store={reduxStore}>{storyFn()}</Provider>);

// Option defaults:
addParameters({
  options: {
    name: `${Package.name} - Storybook`,
    theme: themes.normal,
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * show addon panel as a vertical panel on the right
     * @type {string}
     */
    panelPosition: 'bottom',
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: true,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\//,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off mulitple hierarchy roots
     *   /\|/ - split by `|`
     * @type {RegExp}
     */
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: false, // true by default
  },
});

/**
 * The story loader.
 *
 * @private
 */
function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
