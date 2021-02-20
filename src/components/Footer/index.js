/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Github as GithubIcon } from '@styled-icons/feather/Github';
import { Linkedin as LinkedinIcon } from '@styled-icons/feather/Linkedin';
import { Instagram as InstagramIcon } from '@styled-icons/feather/Instagram';
import * as Icons from './style/FooterIcons';

// eslint-disable-next-line import/prefer-default-export
export function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Icons.FooterWrapper {...props}>
      <Icons.IconList>
        <Icons.IconWrapper
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/marcosHenrique-developer"
        >
          <GithubIcon />
        </Icons.IconWrapper>
        <Icons.IconWrapper
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/marcos-henrique-442289179/"
        >
          <LinkedinIcon />
        </Icons.IconWrapper>
        <Icons.IconWrapper
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/"
        >
          <InstagramIcon />
        </Icons.IconWrapper>
      </Icons.IconList>
    </Icons.FooterWrapper>
  );
}
