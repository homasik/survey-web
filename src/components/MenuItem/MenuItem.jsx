import Grid from 'styled-components-grid';
import React from 'react';
import PropTypes from 'prop-types';

import MenuLink from '../MenuLink';

const displayName = 'MenuItem';
const propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired
};

const MenuItem = ({ children, to }) => (
  <Grid.Unit>
    <MenuLink to={to}>{children}</MenuLink>
  </Grid.Unit>
);

MenuItem.propTypes = propTypes;
MenuItem.displayName = displayName;

export default MenuItem;
