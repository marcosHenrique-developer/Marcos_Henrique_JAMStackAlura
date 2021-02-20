import React from 'react';
import styled from 'styled-components';
import { Cabecalho } from '../src/components/Cabecalho';
import { Capa } from '../src/components/Capa';
import { Footer } from '../src/components/Footer';
import { Card } from '../src/components/Card';
// import { propToStyle } from '../src/theme/utils/propStyle';

const SiteWrapper = styled.div`
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary.main.color};
  background-color: rgba(0, 0, 0, 0.9);
  background-image: url('https://store-images.s-microsoft.com/image/apps.40609.13699191180021100.4742ea56-18b9-43fa-bfb3-2da8de4c1b84.31ecd898-9982-43fb-b801-415621d50d66');
  background-position: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

const ConteudoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 95vw;
`;

export default function Home() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <SiteWrapper>
      <ConteudoWrapper>
        <Capa />
        <Cabecalho />
        <Card />
        <Footer />
      </ConteudoWrapper>
    </SiteWrapper>
  );
}
