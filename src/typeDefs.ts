import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    features: [Feature!]!
  }

  type Feature {
    id: ID!
    name: String!
    statuses: [Status]!
  }

  type Status {
    id: ID!
    name: String!
    tasks: [Task]!
    color: String!
  }

  type Task {
    id: ID!
    name: String!
    users: [User]!
    phase: Phase!
    create_at: String!
    due_date: String!
  }

  type User {
    id: ID!
    name: String!
    color: String!
  }

  type Phase {
    id: ID!
    name: String!
    color: String!
  }
`;

export default typeDefs;
