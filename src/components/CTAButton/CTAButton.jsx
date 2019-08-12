import React from 'react';
import PropTypes from 'prop-types';

import CTAButtonStyle from './CTAButtonStyle';

const propTypes = {
  name: PropTypes.string.isRequired
};

const CTAButton = ({ name }) => <CTAButtonStyle>{name}</CTAButtonStyle>;

const displayName = 'CTAButton';
CTAButton.displayName = displayName;
CTAButton.propTypes = propTypes;

export default CTAButton;
