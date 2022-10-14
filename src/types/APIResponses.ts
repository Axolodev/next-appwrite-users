import type User from './User';

declare namespace APIResponses {
  namespace User {
    interface All {
      users: User[];
    }

    interface ById {
      user: User;
    }
  }

  interface Error {
    message: string;
  }
}

export default APIResponses;
