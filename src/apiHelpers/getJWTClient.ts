import type { NextApiRequest } from 'next';
import { environment } from '../utils';
import sdk from 'node-appwrite';

// Client that verifies whether user has access to the Users collection
const jwtClient = new sdk.Client();

jwtClient
  .setEndpoint(`${environment.hostname}/v1`)
  .setProject(environment.projectId);

function getJWTClient(req: NextApiRequest) {
  const { headers } = req;
  const { authorization } = headers;

  // Get JWT from request
  const jwt = authorization?.replace('Bearer ', '') || '';
  jwtClient.setJWT(jwt);
  return jwtClient;
}

export default getJWTClient;
