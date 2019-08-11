import React from 'react';
import CardContainer from './StyledCard';

const displayName = 'Card';

const Card = () => (
  <CardContainer>
    <p>some content</p>
  </CardContainer>
);

Card.displayName = displayName;
export default Card;
