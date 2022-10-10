import { Account } from 'appwrite';
import type { UserLoginInfo } from '../types';
import appwriteClient from './appwriteClient';

export const createUserSession = async ({ email, password }: UserLoginInfo) => {
  const accountClient = new Account(appwriteClient);
  return accountClient.createEmailSession(email, password);
};

export const getAccount = () => {
  const account = new Account(appwriteClient);
  return account.get();
};

export const logout = () => {
  const account = new Account(appwriteClient);
  return account.deleteSession('current');
};
