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
      <UserForm modalType="login" submitHandler={submitHandler} />
    </div>
  );
}
