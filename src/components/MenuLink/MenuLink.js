import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuLink = styled(Link)`
  font-size: 12px;
  color: ${props => props.theme.color4};
  text-decoration: none;
`;

export default MenuLink;
