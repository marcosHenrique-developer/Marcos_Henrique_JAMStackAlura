/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import Text from '../../foundation';
import Box from '../../foundation/Box';

export default function SobreMim({ gitRepos }) {
  const About = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;

    img {
      height: 200px;
      width: 200px;
      border-radius: 50%;
    }
  `;
  const Mensage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin: 0.5rem auto;
    width: 60%;
  `;
  // const CardProjects = styled.div`
  //   margin-left: 0px;
  // `;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <About>
      <Image src="/me.jpg" alt="Marcos" height={200} width={200} />
      <Mensage>
        <Text as="p" variant="paragraph1" color="tertiary.light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text as="p" variant="paragraph1" color="tertiary.light">
          IMAGES PLUGINS GENERATORS ENGLISH Lorem Ipsum Generator Generate Lorem
          Ipsum placeholder text. Select the number of characters, words,
          sentences or paragraphs, and hit generate! GENERATED LOREM IPSUM 5
          COPY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
          dictum at tempor commodo ullamcorper a lacus vestibulum sed.
        </Text>
      </Mensage>
      <Text as="h2" variant="title" color="tertiary.main">
        Meus Repositórios
      </Text>
      <Box>
        {gitRepos &&
          gitRepos.map((itens) => (
            <Box key={itens.name}>
              <Text tag="p" variant="subTitle" color="tertiary.light">
                {itens.name}
              </Text>
              <Text tag="a" href={itens.html_url}>
                {itens.html_url}
              </Text>
            </Box>
          ))}
      </Box>
    </About>
  );
}
SobreMim.propTypes = {
  gitRepos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      html_url: PropTypes.string,
    }),
  ).isRequired,
};
