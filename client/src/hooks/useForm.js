// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {
  console.log(initialValue);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [ showSuccessMessage, handleSubmit, values, handleChanges ];
}