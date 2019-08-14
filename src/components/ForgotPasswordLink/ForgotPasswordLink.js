import styled from 'styled-components';
import { BrowserRouter as Link } from 'react-router-dom';

const ForgotPasswordLink = styled(Link)`
  color: ${props => props.theme.color7};
  text-decoration: none;
  font-size: ${props => props.theme.fontSize4};
`;

export default ForgotPasswordLink;
