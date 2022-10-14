import * as React from 'react';
import { UserForm } from '../components';
import { useUser } from '../hooks';

export default function Login() {
  const { login } = useUser();

  const submitHandler = async ({ email, password }) => {
    try {
      await fetch('/api/users/new', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      await login({ email, password });
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <div>
      <UserForm modalType="signup" submitHandler={submitHandler} />
    </div>
  );
}
