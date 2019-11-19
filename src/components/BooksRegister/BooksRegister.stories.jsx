import React from 'react';
import { storiesOf } from '@storybook/react';
import { BooksRegisterComponent } from './BooksRegister';
import api from '../../../api.json';

const { books } = api;
const { subjects } = api;

const components = [
  {
    name: 'Default',
    component: (
      <BooksRegisterComponent
        books={books}
        subjects={subjects}
      />
    ),
  },
];

components.forEach((value) => {
  storiesOf('BooksRegister', module)
    .add(value.name, () => value.component);
});
