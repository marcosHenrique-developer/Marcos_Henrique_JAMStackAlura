/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React from 'react';
import Image from 'next/image';
import Box from '../../foundation/Box';
import Text from '../../foundation';
import { CardImage } from './style';

export default function ProjectScreen({ project }) {
  // const { title, description, link, image } = project;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      maxWidth={{ xs: '300px', sm: '370px', md: '550px' }}
      margin="0 auto"
    >
      <Text
        variant="title"
        marginBottom="24px"
        marginTop={{ md: '30px' }}
        color="tertiary.main"
      >
        {project.title}
      </Text>
      <CardImage objectFit="cover">
        <Image src={project.image} layout="fill" />
      </CardImage>
      <Box
        marginTop="62px"
        maxWidth={{ xs: '300px', sm: '370px', md: '550px' }}
        fontSize={{ xs: '16px', md: '20px' }}
      >
        {project.description}
      </Box>
      <Text
        as="p"
        alignSelf="flex-start"
        fontSize="18px"
        fontWeight="700"
        marginTop="36px"
        color="tertiary.main"
        marginBottom="0"
      >
        Visit Website
      </Text>
      <Text
        alignSelf="flex-start"
        marginTop="16px"
        marginBottom="42px"
        tag="a"
        href={project.link}
        textDecoration="none"
        transition="color 300ms"
        target="_blank"
        rel="noreferrer"
        color="primary.main"
      >
        {project.link}
      </Text>
    </Box>
  );
}
