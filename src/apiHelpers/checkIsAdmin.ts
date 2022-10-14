import sdk from 'node-appwrite';
import { NextApiRequest } from 'next';
import getJWTClient from './getJWTClient';

const ADMIN_ROLE_ID = process.env.ADMIN_TEAM_ID;

async function checkIsAdmin(req: NextApiRequest) {
  const jwtClient = getJWTClient(req);

  // Check if user belongs to admin team
  const teams = new sdk.Teams(jwtClient);

  try {
    await teams.get(ADMIN_ROLE_ID);
    return true;
  } catch (exception) {
    // User is not an admin
    return false;
  }
}

export default checkIsAdmin;
