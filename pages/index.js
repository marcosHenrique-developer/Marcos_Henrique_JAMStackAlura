import React from 'react';
import { Card } from '../src/components/Card';
import websitePageHOC from '../src/components/Hoc';

function Home() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Card />
  );
}
export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
