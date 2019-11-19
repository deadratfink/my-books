import React from 'react';
import { storiesOf } from '@storybook/react';
import { Book } from './Book';
import api from '../../../api.json';

const book = api.books[1];
const { subjects } = api;

const components = [
  {
    name: 'Default',
    component: (
      <Book
        book={book}
        subjects={subjects}
      />
    ),
  }
];

components.forEach((value) => {
  storiesOf('Book', module)
    .add(value.name, () => value.component);
});
