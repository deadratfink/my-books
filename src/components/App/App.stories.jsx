import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from './App';

const components = [
  {
    name: 'Default',
    component: (
      <App />
    ),
  }
];

components.forEach((value) => {
  storiesOf('App', module)
    .add(value.name, () => value.component);
});
