import Feature from "./Feature";
import Phase from "./Phase";
import Status from "./Status";
import Task from "./Task";
import User from "./User";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const mocks = {
  Query: {
    features: () => [...new Array(1)],
  },
  Feature,
  Status,
  Task,
  User,
  Phase,
};

export default mocks;
export { getRandomInt };
