import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo } from './Logo';

const components = [
  {
    name: 'Logo',
    component: (
      <Logo />
    ),
  }
];

components.forEach((value) => {
  storiesOf('Images', module)
    .add(value.name, () => value.component);
});
