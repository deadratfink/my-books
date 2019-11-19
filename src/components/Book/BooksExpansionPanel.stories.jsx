import React from 'react';
import { storiesOf } from '@storybook/react';
import { BooksExpansionPanel } from './BooksExpansionPanel';
import api from '../../../api.json';

const {
  books,
  subjects,
} = api;

const components = [
  {
    name: 'Default',
    component: (
      <BooksExpansionPanel
        books={books}
        subjects={subjects}
      />
    ),
  },
  {
    name: 'With heading',
    component: (
      <BooksExpansionPanel
        heading={'All my books'}
        books={books}
        subjects={subjects}
      />
    ),
  },
  {
    name: 'Disabled',
    component: (
      <BooksExpansionPanel
        heading={'None found'}
        alphaBeticalFilter={'Z'}
        books={[]}
        subjects={subjects}
      />
    ),
  },
  {
    name: 'With alphabetial filter (A) and heading',
    component: (
      <BooksExpansionPanel
        heading={'All my books starting with A'}
        alphaBeticalFilter={'A'}
        books={books}
        subjects={subjects}
      />
    ),
  },
  {
    name: 'With alphabetial filter (A)',
    component: (
      <BooksExpansionPanel
        alphaBeticalFilter={'A'}
        books={books}
        subjects={subjects}
      />
    ),
  },
  {
    name: 'With alphabetial filter (#)',
    component: (
      <BooksExpansionPanel
        alphaBeticalFilter={'#'}
        books={books}
        subjects={subjects}
      />
    ),
  }
];

components.forEach((value) => {
  storiesOf('BooksExpansionPanel', module)
    .add(value.name, () => value.component);
});
