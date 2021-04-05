/* eslint-disable arrow-body-style */
import React from 'react';
import { CapaContent } from './styles/CapaWrapper';

// eslint-disable-next-line import/prefer-default-export
export const Capa = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <CapaContent
      backgroundImage="url(https://neilpatel.com/wp-content/uploads/2017/12/portfolio.jpg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <h1>Marcos Henrique</h1>
      <span>*Portifólio*</span>
    </CapaContent>
  );
};
