import Head from 'next/head';
import * as React from 'react';
import { UserForm } from '../components';
import { useUser } from '../hooks';

export default function Login() {
  const { login } = useUser();

  const submitHandler = async ({ email, password }) => {
    try {
      await login({ email, password });
    } catch (exception) {}
  };

  return (
    <div>
      <Head>
        <title>Log in</title>
      </Head>
      <UserForm modalType="login" submitHandler={submitHandler} />
    </div>
  );
}
