/* eslint-disable react/jsx-filename-extension */
/* eslint-disable indent */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';

import { TextStyleVariants } from '../../../foundation';

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

const ProjetoImage = styled.img`
  width: 100%;
  max-width: 500px;
  box-shadow: 1px 1px 8px 1px yellowgreen;
  border-radius: 15px;
  transition: 0.3s;
`;

const ProjetoNome = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin: 5px;
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.primary.main.color.contrastText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.main.color};
  }
`;
const Card = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  ${breakpointsMedia({
    sd: css`
      flex-wrap: wrap;
    `,
    md: css`
      flex-wrap: nowrap;
    `,
  })}
`;
// const CardImage = styled.div`
//   background: #000;
// `;

export default function ProjetoCard() {
  return (
    <>
      <Card>
        {[
          {
            url:
              'https://insta-projeto-nextjs.marcoshenrique-developer.vercel.app/',
            name: 'Instalura',
            src: '/imgs/Project-insta.png',
            alt: 'Foto do projeto Insta',
          },
          {
            url: 'https://github.com/marcosHenrique-developer?tab=repositories',
            name: 'Repositório e Perfil GitHub',
            src: '/imgs/github.png',
            alt: 'Foto do Perfil GitHub',
          },
        ].map((link) => (
          <ProjetoWrapper key={link.url}>
            <a href={link.url}>
              <ProjetoImage src={link.src} alt={link.alt} />
              <ProjetoNome>{link.name}</ProjetoNome>
            </a>
          </ProjetoWrapper>
        ))}
      </Card>
    </>
  );
}
