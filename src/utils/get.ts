import { getJWT } from './auth';

async function getAllUsers<T>(url: string): Promise<T> {
  const { jwt } = await getJWT();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data: T = await response.json();
  return data;
}

export default getAllUsers;
