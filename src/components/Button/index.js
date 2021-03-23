/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../theme/utils/breakpointMedia';
import Text from '../../foundation';

const ButtonWrapper = styled.button`
  cursor: pointer;
  background-color: rgba(0, 150, 136, 0.4);
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  display: flex;
  justify-content: center;
  align-items: center;
  ${breakpointsMedia({
    xs: css`
      & {
        width: 4rem;
      }
      & span {
        font-size: ${({ theme }) =>
          theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) =>
          theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({ theme }) =>
          theme.typographyVariants.smallestException.lineHeight};
      }
      & {
        padding: 0.4rem;
        width: 3.5rem;
      }
    `,
    md: css`
      & span {
        font-size: ${({ theme }) =>
          theme.typographyVariants.paragraph1.fontSize};
      }

      & {
        padding: 0.8rem;
        width: 7rem;
      }
      & span {
        display: initial;
      }
    `,
  })}
  & span {
    color: ${({ theme }) => theme.colors.primary.main.color};
  }
  &:hover,
  &:active {
    background-color: rgba(0, 150, 136, 0.8);
    color: white;
    & span,
    & path {
      color: white;
    }
    transition: ${({ theme }) => theme.transition};
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
    & span,
    & path {
      color: initial;
    }
    cursor: not-allowed;
  }
`;

// eslint-disable-next-line object-curly-newline
export default function Button({ href, children, onClick, disabled }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ButtonWrapper type="submit" onClick={onClick} disabled={disabled}>
      <Text tag="span" mobile="paragraphXS" desktop="paragraphMD" href={href}>
        {children}
      </Text>{' '}
    </ButtonWrapper>
  );
}
Button.defaultProps = {
  onClick: undefined,
  disabled: false,
  href: '',
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  href: PropTypes.string,
};
