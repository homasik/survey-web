import styled from 'styled-components';

const StyledCTAButton = styled.button`
  background-color: ${props => props.theme.color6};
  width: 100%;
  height: 50px;
  border: 2px solid ${props => props.theme.color7};
  border-radius: 10px;
  color: ${props => props.theme.color1};
`;

export default StyledCTAButton;
