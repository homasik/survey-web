import React from 'react';
import PropTypes from 'prop-types';
import StyledCTAButton from './StyledCTAButton';

const propTypes = {
  name: PropTypes.string.isRequired
};
const displayName = 'CTAButton';
const CTAButton = ({ name }) => {
  // eslint-disable-next-line no-unused-expressions
  <StyledCTAButton>{name}</StyledCTAButton>;
};

CTAButton.displayName = displayName;
CTAButton.propTypes = propTypes;
export default CTAButton;
