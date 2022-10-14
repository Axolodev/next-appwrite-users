import { User } from '../types';
import { getJWT } from './auth';

async function getAllUsers() {
  const { jwt } = await getJWT();
  const response = await fetch(`/api/getUsers`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const { users }: { users: User[] } = await response.json();
  return users;
}

export default getAllUsers;
