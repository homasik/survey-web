import styled from 'styled-components';
import Button from '../Button';

const Delete = styled(Button)`
  width: 50px;
  color: ${props => props.theme.color11};
  background: ${props => props.theme.color1};
  border: none;
`;

export default Delete;
