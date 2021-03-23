/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable indent */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';
import data from '../../../../db';
import { TextStyleVariants } from '../../../foundation';
import { Links } from '../../Links';
import { Cards } from '../../Cards';

export const ProjetoWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.main.contrastText};
  border: 1px groove #4dffff;
  border-radius: 5%;
  box-shadow: 1px 1px 10px 1px black;
  margin: 0.5rem 0.5rem;
  max-width: 350px;
  min-width: 280px;
  min-height: 180px;
  max-height: 350px;
  transition: 0.3s;
  padding: 20px;
  width: 90%;
  ${breakpointsMedia({
    sm: css`
      max-width: 400px;
    `,
    md: css`
      max-width: 450px;
    `,
    lg: css`
      max-width: 500px;
    `,
    xl: css`
      max-width: 600px;
    `,
    xxl: css`
      max-width: 650px;
    `,
    uhd: css`
      max-width: 700px;
    `,
  })}
  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
    width: 100%;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    text-decoration: none;
    transition: 0.3s;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariants.smallestException}
      `,
      md: css`
        ${TextStyleVariants.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      cursor: pointer;
    }
  }
`;

export default function ProjetoCard() {
  const { projects } = data;
  return (
    <div>
      {/* {projects.map((project) => console.log(project))} */}
      {projects.map(
        (project) => (
          // eslint-disable-next-line implicit-arrow-linebreak
          <Links
            key={project.id}
            href={`/project/${project.slug}`}
            display="contents"
          >
            <Cards
              key={project.id}
              project={project}
              size={{ xs: 12, md: 12 }}
            />
          </Links>
        ),
        // eslint-disable-next-line function-paren-newline
      )}
    </div>
  );
}
