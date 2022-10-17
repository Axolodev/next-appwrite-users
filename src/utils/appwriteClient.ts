import { Client } from 'appwrite';
import environment from './environment';

const client = new Client()
  .setEndpoint(`${environment.hostname}/v1`) // Your API Endpoint
  .setProject(environment.projectId); // Your project ID

export default client;
