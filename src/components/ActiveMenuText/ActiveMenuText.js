import styled from 'styled-components';
import MenuText from '../MenuText';

const ActiveMenuText = styled(MenuText)`
  color: ${props => props.theme.color6};
`;

export default ActiveMenuText;
