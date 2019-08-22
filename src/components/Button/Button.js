import styled from 'styled-components';

const Button = styled.button`
  flex-basis: 0;
  font-size: ${props => props.theme.FontSize3}
  padding: ${props => props.theme.padding3}
  border: 1px solid ${props => props.theme.color5};
`;

export default Button;
