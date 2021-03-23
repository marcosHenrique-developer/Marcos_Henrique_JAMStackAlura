/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import data from '../../db';
import websitePageHOC from '../../src/components/Hoc';
import ProjectScreen from '../../src/components/ProjectScreen';

export default websitePageHOC(ProjectScreen);

const { projects } = data;

export async function getStaticProps({ params }) {
  const projectData = projects.reduce((acc, project) =>
    project.slug === params.repos ? { ...project } : acc,
  );
  return {
    props: {
      project: projectData,
      pageWrapperProps: {
        seoProps: {
          headTitle: projectData.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const slug = projects.map(
    (project) => ({ params: { repos: project.slug } }),
    [],
  );
  return {
    paths: slug,
    fallback: false,
  };
}
