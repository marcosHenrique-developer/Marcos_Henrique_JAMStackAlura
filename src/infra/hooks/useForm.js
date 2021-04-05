/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

function formatErrors(errors = []) {
  return errors.reduce((errorsAcc, error) => {
    const fieldName = error.path;
    const errorMessage = error.message;

    return {
      ...errorsAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isTouched, setTouchedFields] = useState({});
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  async function validate(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors({});
      setIsFormDisabled(false);
    } catch (err) {
      const formatedErrors = formatErrors(err.inner);
      setErrors(formatedErrors);
      setIsFormDisabled(true);
    }
  }

  useEffect(() => {
    validate(values);
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    // Validação do Form
    isFormDisabled,
    setIsFormDisabled,
    errors,
    isTouched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedFields({
        ...isTouched,
        [fieldName]: true, // usuario: true, senha: true ...
      });
    },
  };
}
