import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StudentBottomMenuStyle = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${props=>props.theme.color1};
`;

export default StudentBottomMenuStyle;
