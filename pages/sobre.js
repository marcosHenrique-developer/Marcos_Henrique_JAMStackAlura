import React from 'react';
import websitePageHOC from '../src/components/Hoc';
import SobreMim from '../src/components/Sobre';

function About({ gitRepos }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <SobreMim gitRepos={gitRepos} />
  );
}
About.propTypes = SobreMim.propTypes;
export default websitePageHOC(About, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Página Sobre',
    },
  },
});
export async function getStaticProps() {
  const gitRepos = await fetch(
    'https://api.github.com/users/marcosHenrique-developer/repos',
  ).then(async (res) => {
    const response = await res.json();
    return response;
  });
  return {
    props: {
      gitRepos,
    },
  };
}
