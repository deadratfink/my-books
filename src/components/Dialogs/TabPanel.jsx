import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * @class TabPanel
 * @classdesc A content panel for tabs.
 * @param {Object} props - The component props.
 */
export function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <div p={3}>{children}</div>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
