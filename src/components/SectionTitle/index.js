/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled, { css } from 'styled-components';
import { TextStyleVariants } from '../../foundation';
import { breakpointsMedia } from '../../theme/utils/breakpointMedia';

const Titulo = styled.h1`
  color: ${({ theme }) => theme.colors.secondary.main.color};
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
  })};
`;
// eslint-disable-next-line import/prefer-default-export
export const SectionTitle = (props) => {
  return <Titulo>{props.text}</Titulo>;
};
