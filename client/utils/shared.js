import { gql } from "@apollo/client";

export const GET_USER_NAME_QUERY = gql`
  query getName {
    name
  }
`;

export const GET_ALL_USERS_QUERY = gql`
  query getName {
    users {
      name,
      email,
      phone,
      address,
    }
  }
`;