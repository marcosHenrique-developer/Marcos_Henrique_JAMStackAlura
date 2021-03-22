/* eslint-disable indent */
import styled, { css } from 'styled-components';
import Text from '../../../foundation';
import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';

export const CardImage = styled.div`
  ${({ objectFit }) => css`
    position: relative;
    max-width: 100%;
    height: 200px;
    width: 320px;
    margin: 1rem auto;
    ${breakpointsMedia({
      sm: css`
        height: 260px;
        width: 370px;
      `,
    })}
    ${breakpointsMedia({
      md: css`
        height: 390px;
        width: 550px;
      `,
    })}
      img {
      object-fit: ${objectFit};
    }
  `}
`;
export const TextLink = styled(Text)`
  a:hover {
    color: ${({ theme }) => theme.colors.primary.main.color};
  }
`;
