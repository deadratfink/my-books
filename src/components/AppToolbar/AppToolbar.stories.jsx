import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AppToolbar } from './AppToolbar';

const components = [
  {
    name: 'Default',
    component: (
      <AppToolbar handleSideBarToggle={action('Sidebar menu clicked')} />
    ),
  }
];

components.forEach((value) => {
  storiesOf('AppToolbar', module)
    .add(value.name, () => value.component);
});
