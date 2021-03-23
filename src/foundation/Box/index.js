import styled from 'styled-components';
import { propToStyle } from '../../theme/utils/propStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
  ${propToStyle('alignItems')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('boxShadow')};
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('borderRadius')}
  ${propToStyle('padding')}
  ${propToStyle('cursor')}
  ${propToStyle('width')}
  ${propToStyle('top')}
  ${propToStyle('left')}
  ${propToStyle('fontSize')}
`;
export default Box;
