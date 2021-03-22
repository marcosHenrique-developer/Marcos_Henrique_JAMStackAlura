/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Image from 'next/image';
import { CardWrapper, CardImage, CardTitle } from './styles';
import Text from '../../foundation';

// eslint-disable-next-line import/prefer-default-export
export const Cards = ({ project, size }) => {
  const { title, image } = project;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div value={size}>
      <CardWrapper>
        <CardImage objectFit="cover">
          <Image src={image} layout="fill" />
        </CardImage>
        <CardTitle>
          <Text
            variant="paragraph1"
            tag="h2"
            textTransform="uppercase"
            letterSpacing="1px"
            color="inherit"
          >
            {title}
          </Text>
        </CardTitle>
      </CardWrapper>
    </div>
  );
};
