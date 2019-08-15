import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { grid } from 'styled-components-grid';

const StudentTabMenuStyle = styled(Link)`
  ${grid.unit({ size: { tablet: 1 / 6, mobile: 1 / 6 } })};
  font-size: ${props => props.theme.fontSize4};
  text-decoration: none;
  color: ${props => props.theme.color1};
`;

export default StudentTabMenuStyle;
