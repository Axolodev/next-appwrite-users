import { environment } from '../utils';
import sdk from 'node-appwrite';
import { NextApiRequest } from 'next';

// Client that verifies whether user has access to the Users collection
const jwtClient = new sdk.Client();

const ADMIN_ROLE_ID = process.env.ADMIN_TEAM_ID;

jwtClient
  .setEndpoint(`${environment.hostname}/v1`)
  .setProject(environment.projectId);

async function checkIsAdmin(req: NextApiRequest) {
  const { headers } = req;
  const { authorization } = headers;

  // Get JWT from request
  const jwt = authorization?.replace('Bearer ', '') || '';
  jwtClient.setJWT(jwt);

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
