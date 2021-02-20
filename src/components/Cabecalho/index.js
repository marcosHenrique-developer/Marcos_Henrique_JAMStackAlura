/* eslint-disable import/prefer-default-export */
import React from 'react';
import Text from '../../foundation';

import { Header } from './style/Container';

// eslint-disable-next-line arrow-body-style
export const Cabecalho = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Header>
      {[
        { url: '/', name: 'Home' },
        { url: '/sobre', name: 'Sobre Mim' },
        { url: '/contato', name: 'Contato' },
      ].map((link) => (
        <li key={link.url}>
          <Text tag="a" href={link.url}>
            {link.name}
          </Text>
        </li>
      ))}
    </Header>
  );
};
