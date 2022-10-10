import * as React from 'react';
import { UserForm } from '../components';

export default function Login() {
  const submitHandler = async (username: string, password: string) => {
    console.log(username, password);
  };

  return (
    <div>
      <UserForm modalType="login" submitHandler={submitHandler} />
    </div>
  );
}
