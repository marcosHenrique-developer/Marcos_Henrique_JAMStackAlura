import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../../../foundation';
import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';
import { propToStyle } from '../../../theme/utils/propStyle';

// eslint-disable-next-line import/prefer-default-export
export const CapaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px 30px 0 0;
  width: 100%;
  min-height: 25vh;
  justify-content: center;
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    sm: css`
      ${TextStyleVariants.paragraph1}
    `,
    md: css`
      ${TextStyleVariants.title}
    `,
    lg: css`
      min-height: 30vh;
    `,
    xxl: css`
      min-height: 35vh;
    `,
  })}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundSize')}
`;
