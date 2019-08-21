import styled from 'styled-components';
import Button from '../Button';

const CTAButton = styled(Button)`
  background-color: ${props => props.theme.color6};
  border: 1px solid ${props => props.theme.color7};
  border-radius: 10px;
  color: ${props => props.theme.color1};
`;

export default CTAButton;
