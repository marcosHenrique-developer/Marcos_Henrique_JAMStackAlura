/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../../../foundation';
import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';

// eslint-disable-next-line import/prefer-default-export
export const Header = styled.div`
  background: #fff8e6;
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 10px 28px 10px 28px;
  margin: 0;
  width: 100%;
  ${breakpointsMedia({
    sm: css``,
    md: css``,
    lg: css``,
    xl: css``,
    xxl: css``,
    uhd: css``,
  })}
  a {
    text-align: center;
    display: flex;
    padding: 0.7rem;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary.light.color};
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariants.smallestException}
      `,
      md: css`
        ${TextStyleVariants.paragraph1}
      `,
      lg: css``,
      xl: css``,
      xxl: css``,
      uhd: css`
        font-size: 20px;
      `,
    })}
    &:hover,
    &:focus {
      color: #ff0066;
      background-color: #e9c46a;
    }
  }
`;
