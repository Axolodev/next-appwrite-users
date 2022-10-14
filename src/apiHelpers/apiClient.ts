import sdk from 'node-appwrite';
import { environment } from '../utils';

// Client that gets the Users collection
const apiClient = new sdk.Client();
apiClient
  .setEndpoint(`${environment.hostname}/v1`)
  .setProject(environment.projectId)
  .setKey(process.env.APPWRITE_SECRET_API_KEY);

export default apiClient;
