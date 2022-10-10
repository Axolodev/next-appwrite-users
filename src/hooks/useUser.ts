import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { UserContext } from '../components';
import { UserLoginInfo } from '../types';
import { createUserSession, getAccount, logout as logUserOut } from '../utils';

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const getUserAccount = async () => {
      try {
        const account = await getAccount();

        if (account) setUser(account);
      } catch (exception) {}
    };
    getUserAccount();
  }, []);

  useEffect(() => {
    const isLoginRoute =
      router.pathname === '/login' || router.pathname === '/signup';
    if (user && isLoginRoute) {
      router.push('/');
    }
  }, [user]);

  const login = async (user: UserLoginInfo) => {
    await createUserSession(user);
    const account = await getAccount();

    setUser({ ...account });
  };

  const logout = async () => {
    await logUserOut();
    setUser(null);
  };

  return { user, login, logout };
};

export default useUser;
