/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { breakpointsMedia } from '../../../theme/utils/breakpointMedia';
import Text from '../../../foundation';
import Button from '../../Button';
import TextField from '../../Input';
import Result from './Result';
import Box from '../../../foundation/Box';
import { useForm } from '../../../infra/hooks/useForm';
import { contactService } from '../../../services/contactService';

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

const messageSchema = yup.object().shape({
  name: yup
    .string()
    .required('Preencha o seu nome')
    .min(2, 'O nome precisa ter pelo menos 2 caracteres'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Coloque o seu melhor e-mail')
    .min(6, 'O e-mail precisa ter pelo menos 6 caracteres'),
});

const FormContent = ({
  onSubmit,
  formSubmission = false,
  formState = formStates.DEFAULT,
  props,
}) => {
  const [isFormSubmited, setIsFormSubmited] = React.useState(formSubmission);
  const [submissionStatus, setSubmissionStatus] = React.useState(formState);
  const initialValues = {
    name: '',
    email: '',
  };

  async function resetValues() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmissionStatus('');
  }

  const form = useForm({
    initialValues,
    onSubmit: async (values) => {
      setSubmissionStatus(formStates.LOADING);
      form.setIsFormDisabled(true);
      contactService
        .sendMessage(values)
        .then(() => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionStatus(formStates.ERROR);
        })
        .finally(() => {
          setIsFormSubmited(true);
          form.setIsFormDisabled(false);
          resetValues();
        });
    },
    validateSchema: async (values) =>
      messageSchema.validate(values, {
        abortEarly: false,
      }),
  });

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <FormMessageWrapper.Content {...props}>
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
      <form onSubmit={onSubmit || form.handleSubmit}>
        <Text variant="title" tag="h1" color="tertiary.main">
          Entre em contato conosco
        </Text>
        <div>
          <TextField
            placeholder="Nome"
            name="name"
            value={form.values.name}
            error={form.errors.name}
            isTouched={form.isTouched.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </div>
        <div>
          <TextField
            placeholder="Email"
            name="email"
            value={form.values.email}
            error={form.errors.email}
            isTouched={form.isTouched.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
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
            types="submit"
            disabled={form.isFormDisabled}
            fullWidth
            margin="0"
          >
            Enviar
          </Button>
        </div>

        <Box display="flex" justifyContent="center">
          <Box
            width={{ xs: '80px', md: '150px' }}
            height={{ xs: '80px', md: '150px' }}
            marginBottom={{ xs: '4rem', md: '0' }}
          >
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

FormContent.defaultProps = {
  onSubmit: undefined,
  formSubmission: false,
  formState: formStates.DEFAULT,
  props: undefined,
};

FormContent.propTypes = {
  onSubmit: PropTypes.func,
  formSubmission: PropTypes.bool,
  formState: PropTypes.string,
  props: PropTypes.node,
};

export default FormCadastro;
