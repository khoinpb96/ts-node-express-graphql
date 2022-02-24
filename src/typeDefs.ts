import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    features: [Feature!]!
    feature: Feature
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
    id: ID
    name: String!
    color: String!
  }

  type Phase {
    id: ID
    name: String!
    color: String!
  }

  type Mutation {
    createUser(name: String!, color: String!): Response!
    createPhase(name: String!, color: String!): Response!
    updatePhase(id: ID!, phase: PhaseInput!): Response!
    createFeature(name: String!): Response!
    createStatus(name: String!, color: String!, feature_id: ID!): Response!
    deleteStatus(id: ID!, feature_id: ID!): Response!
    createTask(task: CreateTaskInput!): Response!
    deleteTask(id: ID!, status_id: ID!): Response!
  }

  input CreateTaskInput {
    name: String!
    phase_id: ID!
    user_id: [ID]!
    status_id: ID!
  }

  input PhaseInput {
    name: String!
    color: String!
  }

  type Response {
    code: Int!
    success: Boolean!
    message: String!
  }
`;

export default typeDefs;
