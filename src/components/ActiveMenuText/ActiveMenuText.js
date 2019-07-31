import styled from 'styled-components';
import MenuText from '../MenuText';

const ActiveMenuText = styled(MenuText)`
  color: ${props => props.theme.color11};
`;

export default ActiveMenuText;
