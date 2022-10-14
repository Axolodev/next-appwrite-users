import { NextApiRequest, NextApiResponse } from 'next';
import sdk from 'node-appwrite';
import { checkIsAdmin } from '../../../apiHelpers';
import { environment } from '../../../utils';

// Client that gets the Users collection
const apiClient = new sdk.Client();
apiClient
  .setEndpoint(`${environment.hostname}/v1`)
  .setProject(environment.projectId)
  .setKey(process.env.APPWRITE_SECRET_API_KEY);

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const isAdmin = await checkIsAdmin(req);

  if (!isAdmin) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  // User belongs to admin team. They should have access to all users
  const users = new sdk.Users(apiClient);

  try {
    const userList = await users.list();

    const mappedUsersList = userList.users.map((user) => ({
      id: user.$id,
      name: user.name,
      email: user.email,
    }));

    res.status(200).json({ users: mappedUsersList });
  } catch (exception) {
    console.error('Error on getUsers', exception);
    res.status(exception.code).send({ error: exception });
  }
}
