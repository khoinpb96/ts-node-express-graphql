import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    getUsers: [User!]!
  }

  type User {
    name: String!
  }

  type Mutation {
    createUser(name: String!): CreateUserResponse
  }

  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    data: User
  }
`;

export default typeDefs;
