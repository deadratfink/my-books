import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ErrorDialog } from '../Dialogs/ErrorDialog';

/**
 * @classdesc The React error boundary with error dialog as fallback UI.
 */
export class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the error dialog fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, info) { // eslint-disable-line class-methods-use-this
    // log the error
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorDialog
          open={this.state.hasError}
          error={this.state.error}
        />
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
