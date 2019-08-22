import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  font-size: ${props => props.theme.FontSize3}
  height: 50px;
  border: 1px solid ${props => props.theme.color5};
`;

export default Button;
