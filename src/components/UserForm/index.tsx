import { useState } from 'react';
import type { UserLoginInfo } from '../../types';
import InputField from '../InputField';
import FormButton from './FormButton';

interface LoginModalParams {
  modalType: 'login' | 'signup';
  submitHandler: (input: UserLoginInfo) => Promise<void>;
}

function LoginModal({ modalType, submitHandler }: LoginModalParams) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isSignup = modalType === 'signup';

  async function userCallHandler(e: React.FormEvent) {
    setLoading(true);
    try {
      submitHandler({ email, password });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
    e.preventDefault();
  }

  return (
    <form className="bg-white shadow-md rounded p-8">
      <InputField
        changeHandler={(e) => setEmail(e.target.value)}
        id="email"
        label="Email"
        placeholder="Email"
        value={email}
        type="email"
      />
      <InputField
        changeHandler={(e) => setPassword(e.target.value)}
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
        value={password}
      />

      <div className="flex items-end justify-end">
        <FormButton
          loading={loading}
          handler={userCallHandler}
          defaultLabel={isSignup ? 'Sign Up' : 'Log In'}
          loadingLabel="Loading..."
        />
      </div>
      <p className="text-red-500 font-bold">{error}</p>
    </form>
  );
}

export default LoginModal;
