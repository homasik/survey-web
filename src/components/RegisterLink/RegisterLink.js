import styled from 'styled-components';
import { BrowserRouter as Link } from 'react-router-dom';

const RegisterLink = styled(Link)`
  color: ${props => props.theme.color7};
  text-decoration: none;
  font-size: ${props => props.theme.fontSize3};
`;

export default RegisterLink;
