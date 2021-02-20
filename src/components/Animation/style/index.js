/* eslint-disable indent */
/* eslint-disable no-shadow */
import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../../../foundation';
import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';

export const Wrapper = styled.section`
  width: 80%;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 1rem auto auto auto;
  display: flex;
  justify-content: center;
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.paragraph1}
    `,
    md: css`
      ${TextStyleVariants.title}
    `,
  })}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    & h1 {
      // eslint-disable-next-line no-shadow
      color: ${({ theme }) => theme.colors.tertiary.light.color};
    }
    & strong {
      display: inline-block;
      font-weight: 500;
      padding: 0.3rem;

      background-color: ${({ theme }) => theme.colors.primary.main.color};
      color: ${({ theme }) => theme.colors.primary.main.contrastText};
    }
    & span {
      display: block;
      letter-spacing: 1px;
      color: ${theme.colors.tertiary.main.color};
      ${breakpointsMedia({
        // eslint-disable-next-line indent
        md: css`
          ${TextStyleVariants.paragraph1}
        `,
      })}
    }
  `}
`;
