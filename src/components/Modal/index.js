/* eslint-disable indent */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { breakpointsMedia } from '../../theme/utils/breakpointMedia';
import Box from '../../foundation/Box';

export const ModalWrapper = styled.section`
  position: fixed;
  height: 300vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
  transition: 0.2s;
  background-color: rgba(0, 150, 136, 0.1);
  & > div {
    height: 500px;
  }
  & > div {
    ${breakpointsMedia({
      xs: css`
        width: max(85%, 280px);
      `,
      md: css`
        width: max(50%, 340px);
      `,
    })}
  }
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default function Modal({ isOpen, onClose, children }) {
  const CloseButton = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box
      position="absolute"
      top={{
        xs: '30px',
        md: '30px',
      }}
      right={{
        xs: '40px',
        md: '30px',
      }}
      onClick={() => onClose()}
      cursor="pointer"
      width="30px"
    >
      <img src="/closeButton.svg" alt="botoa de fechar" />
    </Box>
  );
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ModalWrapper
      onClick={(event) => {
        const isSafeArea = event.target.closest(
          '[data-modal-safe-area="true"]',
        );
        if (!isSafeArea) onClose();
      }}
      isOpen={isOpen}
    >
      <motion.div
        variants={{
          open: {
            y: 0,
            opacity: 1,
            scale: 1,
          },
          closed: {
            y: '-50%',
            opacity: 0,
            scale: 0,
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
          CloseButton,
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
