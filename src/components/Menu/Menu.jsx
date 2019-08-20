import React from 'react';
import Grid from 'styled-components-grid';
import PropTypes from 'prop-types';

const displayName = 'Menu';

const propTypes = {
  children: PropTypes.element
};

const defaultProps = {
  children: null
};

const Menu = ({ children }) => <Grid wrap={false}>{children}</Grid>;

Menu.displayName = displayName;
Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
