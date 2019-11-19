import React from 'react';
import { storiesOf } from '@storybook/react';
import { AppToolbarTitle } from './AppToolbarTitle';

const components = [
  {
    name: 'Default',
    component: (
      <AppToolbarTitle title="My Books" />
    ),
  }
];

components.forEach((value) => {
  storiesOf('AppToolbarTitle', module)
    .add(value.name, () => value.component);
});
