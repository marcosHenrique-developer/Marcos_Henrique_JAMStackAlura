import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff8e6;
  width: 100%;
  a {
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
  ${breakpointsMedia({
    xs: css`
      border-radius: 0px;
    `,
    md: css`
      border-radius: 0px 0px 30px 30px;
    `,
  })}
`;

export const IconList = styled.div`
  gap: 2rem;
  display: flex;
  background-color: #e9c46a;
`;

export const IconWrapper = styled.a`
  ${({ theme }) => css`
    width: 64px;
    height: 64px;
    padding: 16px;
    &:hover {
      background: ${theme.colors.primary.main.color};
    }
    & svg {
      stroke-width: 2;
      color: ${theme.colors.secondary.main.color};
    }
  `}
`;
