import React from 'react';
import PropTypes from 'prop-types';

import CardStyle from './CardStyle';

const propTypes = {
  children: PropTypes.element.isRequired
};

const Card = ({ children }) => <CardStyle>{children}</CardStyle>;

const displayName = 'Card';
Card.displayName = displayName;
Card.propTypes = propTypes;

export default Card;
