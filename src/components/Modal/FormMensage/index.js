/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';

import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';
import Text from '../../../foundation';
import Button from '../../Button';
import TextField from '../../Input';
import Result from './Result';
import Box from '../../../foundation/Box';

const FormMessageWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.2rem 0.5rem;
`;
FormMessageWrapper.Title = styled.div`
  width: 92%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
FormMessageWrapper.Content = styled.div`
  /* width: 90%; */
  & form {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  & form button {
    align-self: flex-end;
    ${breakpointsMedia({
      xs: css`
        margin-right: auto;
      `,
      md: css`
        margin-right: auto;
      `,
    })}
  }
`;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const FormContent = () => {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStates.DEFAULT,
  );
  const [userInfo, setUserInfo] = React.useState({
    email: '',
    nome: '',
  });

  // eslint-disable-next-line operator-linebreak
  const isFormInvalid =
    userInfo.email.length === 0 || userInfo.nome.lenght === 0;

  async function resetValues() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setIsFormSubmited(false);
    setSubmissionStatus(formStates.DEFAULT);
    setUserInfo({ email: '', nome: '' });
  }

  function handleChange(ev) {
    const fieldName = ev.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: ev.target.value,
    });
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <FormMessageWrapper.Content>
      <FormMessageWrapper.Title>
        <Text tag="h1" mobile="subTitleXS" desktop="subTitleMD">
          {!isFormSubmited && 'Please type a valid message'}
          {isFormSubmited &&
            submissionStatus === formStates.LOADING &&
            'Loading ...'}
          {isFormSubmited &&
            submissionStatus === formStates.ERROR &&
            'Try again :('}
          {isFormSubmited &&
            submissionStatus === formStates.DONE &&
            'Congratulations :)'}
        </Text>
      </FormMessageWrapper.Title>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setIsFormSubmited(true);
          setSubmissionStatus(formStates.LOADING);
          const userDTO = { username: userInfo.email, name: userInfo.nome };
          setTimeout(() => {
            fetch('https://instalura-api.vercel.app/api/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userDTO),
            })
              .then((respostaDoServidor) => {
                if (respostaDoServidor.ok) {
                  return respostaDoServidor.json();
                }
                throw new Error(
                  'Não foi possível cadastrar o usuário agora :(',
                );
              })
              .then((respostaConvertidaEmObjeto) => {
                setSubmissionStatus(formStates.DONE);
                resetValues();
                console.log(respostaConvertidaEmObjeto);
              })
              .catch((error) => {
                setSubmissionStatus(formStates.ERROR);
                resetValues();
                console.error(error);
              });
          }, 500);
        }}
      >
        <Text variant="title" tag="h1" color="tertiary.main">
          Entre em contato conosco
        </Text>
        <div>
          <TextField
            placeholder="Nome"
            name="nome"
            value={userInfo.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>

        <div
          style={{
            display: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant="primary.main"
            type="submit"
            disabled={isFormInvalid}
            fullWidth
            margin="0"
          >
            Enviar
          </Button>
        </div>

        <Box display="flex" justifyContent="center">
          <Box width="150px" height="150px">
            {isFormSubmited && submissionStatus === formStates.LOADING && (
              <Result animation={formStates.LOADING} />
            )}
            {isFormSubmited && submissionStatus === formStates.DONE && (
              <Result animation={formStates.DONE} />
            )}
            {isFormSubmited && submissionStatus === formStates.ERROR && (
              <Result animation={formStates.ERROR} />
            )}
          </Box>
        </Box>
      </form>
    </FormMessageWrapper.Content>
  );
};

// eslint-disable-next-line react/prop-types
const FormCadastro = ({ props }) => (
  <FormMessageWrapper>
    <Box
      boxShadow="3px 2px 5px rgba(7, 12, 14, 0.3)"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex={1}
      padding={{
        xs: '16px',
        md: '30px',
      }}
      borderRadius="1rem"
      margin="10rem 0 0"
      backgroundColor="white"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {props && <props.CloseButton />}
      <FormContent />
    </Box>
  </FormMessageWrapper>
);

export default FormCadastro;
