import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

describe('Unit Tests - App.js', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
