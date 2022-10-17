import React from 'react';
import type { Models } from 'appwrite';

type UserAccount = Models.Account<Models.Preferences>;
export interface UserContextType {
  user: UserAccount | null;
  setUser: (user: UserAccount | null) => void;
}

export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default ({ children }) => {
  const [user, setUser] = React.useState<UserAccount>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
