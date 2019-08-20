import React from 'react';
import Grid from 'styled-components-grid';
import PropTypes from 'prop-types';

const displayName = 'Menu';

const propTypes = {
  children: PropTypes.element.isRequired
};

const Menu = ({ children }) => <Grid wrap={false}>{children}</Grid>;

Menu.displayName = displayName;
Menu.propTypes = propTypes;

export default Menu;
