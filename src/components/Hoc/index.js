/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import WrapperGeral from './WrapperProject';

export default function websitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WrapperGeral {...pageWrapperProps} {...props.pageWrapperProps}>
      <PageComponent {...props} />
    </WrapperGeral>
  );
}
