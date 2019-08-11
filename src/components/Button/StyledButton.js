import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid ${props => props.theme.color5};
`;

export default StyledButton;
