import React from 'react';
import { storiesOf } from '@storybook/react';
import { Books } from './Books';
import api from '../../../api.json';

const {
  books,
  subjects,
} = api;

const components = [
  {
    name: 'Default',
    component: (
      <Books
        books={books}
        subjects={subjects}
      />
    ),
  }
];

components.forEach((value) => {
  storiesOf('Books', module)
    .add(value.name, () => value.component);
});
