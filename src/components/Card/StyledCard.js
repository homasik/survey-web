import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid ${props => props.theme.color5};
  box-shadow: 1px 1px 5px ${props => props.theme.color5};
`;

export default CardContainer;
