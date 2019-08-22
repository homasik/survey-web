import styled from 'styled-components';

const Button = styled.button`
  flex-basis: 0;
  font-size: ${props => props.theme.fontSize3}
  padding: ${props => props.theme.padding3}
  border: 1px solid ${props => props.theme.color5};
  border-radius: ${props.theme.borderRadius2};
`;

export default Button;
