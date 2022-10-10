import { useContext } from 'react';
import { UserContext } from '../components';

const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
