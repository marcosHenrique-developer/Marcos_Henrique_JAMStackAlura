/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointMedia';

export const CardImage = styled.div`
  ${({ objectFit }) => css`
    position: relative;
    max-width: 100%;
    height: 200px;
    ${breakpointsMedia({
      md: css`
        height: 390px;
      `,
    })}
    img {
      object-fit: ${objectFit};
    }
  `}
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  ${breakpointsMedia({
    md: css`
      height: 110px;
    `,
  })}
  h2 {
    ${breakpointsMedia({
      md: css`
        font-size: 24px;
      `,
    })}
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: 250px;
  border: 2px solid ${({ theme }) => theme.colors.tertiary.light.color};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.tertiary.main.color};
  margin-bottom: 30px;
  /* cursor: pointer; */
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary.main.color};
    color: ${({ theme }) => theme.colors.primary.main.color};
  }
  &:before {
    content: '';
    background-color: ${({ theme }) => theme.colors.primary.main.color};
    opacity: 0.4;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 200ms all;
    z-index: 3;
  }
  &:hover:before {
    opacity: 0;
  }
  ${breakpointsMedia({
    md: css`
      height: 500px;
      margin-bottom: 50px;
    `,
  })}
`;
