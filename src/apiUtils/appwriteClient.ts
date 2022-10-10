import sdk from 'node-appwrite';
import environment from './environment';

const client = new sdk.Client();

client
  .setEndpoint(`${environment.hostname}/v1`)
  .setProject(environment.projectId)
  .setKey(environment.apiKey);

export default client;
