import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuLink = styled(Link)`
  font-size: ${props => props.theme.fontSize3};
  color: ${props => props.theme.color4};
  text-decoration: none;
`;

export default MenuLink;
