import gql from "graphql-tag";

const userQuery = gql`
  query {
    user {
      id
      email
    }
  }
`;

export default userQuery;
