import Head from 'next/head';
import * as React from 'react';
import { UserForm } from '../components';
import { useUser } from '../hooks';
import { UserLoginInfo } from '../types';
import { createAccount } from '../utils/auth';

export default function Login() {
  const { login } = useUser();

  const submitHandler = async ({ email, password, name }: UserLoginInfo) => {
    if (!email || !password) return;

    try {
      await createAccount({ email, password, name });
    } catch (error) {
      console.error(error);
      return;
    }

    try {
      await login({ email, password });
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <div>
      <Head>
        <title>Sign up</title>
      </Head>
      <UserForm
        modalType="signup"
        submitHandler={submitHandler}
        showNameField
      />
    </div>
  );
}
