import Grid from 'styled-components-grid';
import React from 'react';
import PropTypes from 'prop-types';

import MenuLink from '../MenuLink';

const displayName = 'MenuItem';

const propTypes = {
  to: PropTypes.string,
  children: PropTypes.element
};

const defaultProps = {
  to: null,
  children: ''
};

const MenuItem = ({ to, children }) => (
  <Grid.Unit>
    <MenuLink to={to}>{children}</MenuLink>
  </Grid.Unit>
);

MenuItem.displayName = displayName;
MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
