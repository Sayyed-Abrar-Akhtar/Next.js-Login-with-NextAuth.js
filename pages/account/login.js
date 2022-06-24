import React, { useState, useEffect } from 'react';

import { signIn, useSession } from 'next-auth/react';
import { AUTHENTICATED } from '../../constants/sessionConstants';
import { useDispatch } from 'react-redux';
import { setLoginStatus } from '../../redux/actions/userActions';
import { useRouter } from 'next/router';

import styles from '../../styles/Login.module.css';
import LoginForm from '../../components/LoginForm';

function Login() {
  const dispatch = useDispatch();

  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === AUTHENTICATED) {
      dispatch(setLoginStatus(session.user));
      router.push('/account');
    }
  }, [router, status, session, dispatch]);

  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}

export default Login;
