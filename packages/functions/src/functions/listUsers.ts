import * as dotenv from "dotenv";
dotenv.config();
import sdk from "node-appwrite";
import { createClientFromRequest } from "../utils";

export default (req, res) => {
  const client = createClientFromRequest(req);

  const usersApi = new sdk.Users(client);

  // This uses promises so the output is cleaner and easier to read
  usersApi
    .list()
    .then((usersList) => {
      res.json(
        {
          usersList,
        },
        200
      );
    })
    .catch((error) => {
      res.json(
        {
          error,
        },
        400
      );
    });
};
