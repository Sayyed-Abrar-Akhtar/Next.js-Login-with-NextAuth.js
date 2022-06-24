import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

import styles from '../styles/LoginForm.module.css';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

const LoginForm = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      {error ? (
        <p className={styles.message}> {error}</p>
      ) : (
        <p className={styles.message_hidden}>
          This is the error message section
        </p>
      )}
      <form className='form_group' onSubmit={submitHandler}>
        <FormInput
          id='email'
          placeholder='Please enter your email address'
          label='email'
          type='email'
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          id='password'
          placeholder='Please enter your password'
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton type='submit'>Login</CustomButton>
      </form>
    </div>
  );
};

export default LoginForm;
