import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { LoadingDialogComponent } from './LoadingDialog';

const components = [
  {
    name: 'Only books loading (GET default)',
    component: (
      <LoadingDialogComponent
        open={true}
        isBooksFetch={true}
        isSubjectsFetch={false}
      />
    ),
  },
  {
    name: 'Book update (PUT)',
    component: (
      <LoadingDialogComponent
        booksMethod={'PUT'}
        open={true}
        isBooksFetch={true}
        isSubjectsFetch={false}
      />
    ),
  },
  {
    name: 'Book saving (POST)',
    component: (
      <LoadingDialogComponent
        booksMethod={'POST'}
        open={true}
        isBooksFetch={true}
        isSubjectsFetch={false}
      />
    ),
  },
  {
    name: 'Book deleting (DELETE)',
    component: (
      <LoadingDialogComponent
        booksMethod={'DELETE'}
        open={true}
        isBooksFetch={true}
        isSubjectsFetch={false}
      />
    ),
  },
  {
    name: 'Only subjects loading (GET default)',
    component: (
      <LoadingDialogComponent
        open={true}
        isBooksFetch={false}
        // isBooksError,
        // booksError,
        isSubjectsFetch={true}
      // isSubjectsError,
      // subjectsError,
      />
    ),
  },
  {
    name: 'Books and subjects loading',
    component: (
      <LoadingDialogComponent
        open={true}
        booksMethod={'GET'}
        isBooksFetch={true}
        // isBooksError,
        // booksError,
        isSubjectsFetch={true}
        subjectsMethod={'GET'}
      // isSubjectsError,
      // subjectsError,
      />
    ),
  },
];

components.forEach((value) => {
  storiesOf('LoadingDialog', module)
    .add(value.name, () => value.component);
});
