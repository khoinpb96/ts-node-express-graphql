import {
  createUser,
  createPhase,
  updatePhase,
  createFeature,
  createStatus,
  deleteStatus,
  createTask,
  deleteTask,
} from "./Mutation";
import { features, feature } from "./Query";

const resolvers = {
  Query: {
    features,
    feature,
  },

  Mutation: {
    createFeature,
    createUser,
    createPhase,
    createStatus,
    deleteStatus,
    createTask,
    deleteTask,
    updatePhase,
  },
};

export default resolvers;
