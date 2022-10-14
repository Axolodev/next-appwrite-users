import sdk from "node-appwrite";

const client = new sdk.Client();

function createClientFromRequest(request) {
  let hostname = process.env.APPWRITE_HOSTNAME;
  if (!hostname.endsWith("/")) {
    hostname += "/";
  }

  return client
    .setEndpoint(`${hostname}v1`)
    .setProject(request.variables.APPWRITE_FUNCTION_PROJECT_ID)
    .setJWT(request.variables.APPWRITE_FUNCTION_JWT);
}

export default createClientFromRequest;
