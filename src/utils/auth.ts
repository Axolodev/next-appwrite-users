import { Account, ID } from 'appwrite';
import type { UserLoginInfo } from '../types';
import appwriteClient from './appwriteClient';

const accountClient = new Account(appwriteClient);

export const createAccount = async ({ email, password }: UserLoginInfo) =>
  accountClient.create(ID.unique(), email, password, 'Placeholder Name');

export const createUserSession = async ({ email, password }: UserLoginInfo) =>
  accountClient.createEmailSession(email, password);

export const getAccount = () => accountClient.get();

export const logout = () => accountClient.deleteSession('current');

export const getJWT = () => accountClient.createJWT();
