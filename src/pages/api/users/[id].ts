import { NextApiRequest, NextApiResponse } from 'next';
import sdk from 'node-appwrite';
import { apiClient, checkIsAdmin, getJWTClient } from '../../../apiHelpers';
import type { APIResponses } from '../../../types';

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse<APIResponses.User.ById | APIResponses.Error>
) {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({ message: 'Bad request' });
    return;
  }

  if (id === 'me') {
    const jwtClient = getJWTClient(req);
    const account = new sdk.Account(jwtClient);
    const user = await account.get();

    res.status(200).json({
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    });
    return;
  }

  const isAdmin = await checkIsAdmin(req);

  if (!isAdmin) {
    res
      .status(401)
      .json({ message: "You don't have permission to view this user" });
    return;
  }

  // User belongs to admin team. They should have access to this user
  const userApi = new sdk.Users(apiClient);

  try {
    const user = await userApi.get(id as string);
    res.status(200).json({
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (exception) {
    console.error('Error on getUsers', exception);
    res.status(exception.code).send({ message: exception });
  }
}
