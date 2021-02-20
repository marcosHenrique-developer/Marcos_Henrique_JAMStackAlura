/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-body-style */
import React from 'react';
import Cover from '../Animation';
import { SectionTitle } from '../SectionTitle';
import ProjetoCard from './style/MenuWrapper';

// eslint-disable-next-line import/prefer-default-export
export const MenuWrapper = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Cover />
      <SectionTitle text="Meus Projetos" />
      <ProjetoCard />
    </div>
  );
};
