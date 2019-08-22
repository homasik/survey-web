import styled from 'styled-components';
import Button from '../Button';

const Delete = styled(Button)`
  color: ${props => props.theme.color11};
  background: ${props => props.theme.color1};
  max-width: 50px;
`;

export default Delete;
