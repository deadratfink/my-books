import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { SubjectList } from '../SubjectList/SubjectList';

/**
 * The style classes factory function.
 *
 * @returns {Object} The styles object.
 * @memberof SideBarContent
 * @private
 */
const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 500,
    paddingLeft: theme.spacing(1.75),
    ...theme.mixins.toolbar,
  },
}));

/**
 * @class SideBarContent
 * @classdesc An content container component for the sidebar.
 */
export function SideBarContent() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.toolbar}>Subjects:</div>
      <Divider />
      <SubjectList />
    </Fragment>
  );
}
