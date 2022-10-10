import sdk from 'node-appwrite';
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';
import runMiddleware from '../../../apiUtils/runMiddleware';
import type { UserLoginInfo } from '../../../types';
import { appwriteClient } from '../../../apiUtils';

const cors = Cors({
  methods: ['POST'],
});

const users = new sdk.Users(appwriteClient);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  const body = JSON.parse(req.body) as UserLoginInfo;

  const { email, password } = body;

  if (!email || !password) {
    res.status(400).json({ message: 'Missing email or password' });
    return;
  }

  try {
    const response = await users.create(
      'unique()',
      email,
      '',
      password,
      'placeholder name'
    );
    res.status(200).json(response);
  } catch (exception) {
    res.status(400).json(exception);
  }
}
