import {grid} from 'styled-components-grid';
import styled from 'styled-components';

const Card = styled.div`
  ${grid({})};
  border: 1px solid ${props => props.theme.color5};
  box-shadow: 1px 1px 5px ${props => props.theme.color5};
  border-radius: ${props => props.theme.borderRadius2}
`;

export default Card;
