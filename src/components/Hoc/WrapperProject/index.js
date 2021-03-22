/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Cabecalho } from '../../Cabecalho';
import { Capa } from '../../Capa';
import { Footer } from '../../Footer';
import { SEO } from '../../SEO';

export const SiteWrapper = styled.div`
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary.main.color};
  background-color: #fffaf7;
  /* background-image: url('https://store-images.s-microsoft.com/image/apps.40609.13699191180021100.4742ea56-18b9-43fa-bfb3-2da8de4c1b84.31ecd898-9982-43fb-b801-415621d50d66'); */
  background-position: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const ConteudoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 95vw;
`;

export default function WrapperGeral({ seoProps, children, menuProps }) {
  return (
    <SiteWrapper>
      <ConteudoWrapper>
        <SEO {...seoProps} />
        {menuProps.display && <Capa />}
        {menuProps.display && <Cabecalho />}
        {children}
        {menuProps.display && <Footer />}
      </ConteudoWrapper>
    </SiteWrapper>
  );
}
WrapperGeral.defaultProps = {
  seoProps: {},
  menuProps: {
    display: true,
  },
};
WrapperGeral.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
