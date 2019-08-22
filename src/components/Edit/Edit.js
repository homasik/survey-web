import styled from 'styled-components';
import Delete from '../Button';

const Edit = styled(Button)`
  width: 50px;
  color: ${props => props.theme.color11};
  background: ${props => props.theme.color1};
`;

export default Edit;
