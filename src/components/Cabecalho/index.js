/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Text from '../../foundation';
import Button from '../Button';
import Modal from '../Modal';
import FormMessage from '../Modal/FormMensage';
import { Header } from './style/Container';

// eslint-disable-next-line arrow-body-style
export const Cabecalho = () => {
  const [isModalOpen, setOpen] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Header>
      {[
        { url: '/', name: 'Home' },
        { url: '/sobre', name: 'Sobre Mim' },
        // { url: '/contato', name: 'Contato' },
      ].map((link) => (
        <li key={link.url}>
          <Text tag="a" href={link.url}>
            {link.name}
          </Text>
        </li>
      ))}
      <Button type="submit" onClick={() => setOpen(!isModalOpen)}>
        Contato
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setOpen(false);
        }}
      >
        {(props) => <FormMessage props={props} />}
      </Modal>
    </Header>
  );
};
