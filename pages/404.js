import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '../src/components/Button';
import websitePageHOC from '../src/components/Hoc';

const PageError = styled.div`
  background-image: url('https://becode.com.br/wp-content/uploads/2016/10/Erro-4041.png');
  background-color: #346d84;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 10%;
  left: 15px;
  top: 2px;
  position: fixed;
`;

function Page404() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <PageError>
      <Wrapper>
        <Button href="/">
          <ArrowBackIcon
            style={{ alingItems: 'center', justifyContent: 'center' }}
          />
        </Button>
      </Wrapper>
    </PageError>
  );
}
export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
    menuProps: {
      display: false,
    },
  },
});
