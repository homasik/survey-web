import styled from 'styled-components';
import DescriptionText from '../DescriptionText';

const ErrorText = styled(DescriptionText)`
  color: ${props => props.theme.color2};
`;

export default ErrorText;
