import React from 'react';
import { User } from '../types';

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default ({ children }) => {
  const [user, setUser] = React.useState<User>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
