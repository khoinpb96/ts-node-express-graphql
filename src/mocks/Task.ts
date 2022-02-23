import { getRandomInt } from "./index";
import casual from "casual";

const Task = () => {
  return {
    id: getRandomInt(100),
    name: casual.title,
    users: () => [...new Array(1)],
    phase: () => {},
    create_at: casual.unix_time.toString(),
    due_date: "1646413200",
  };
};

export default Task;
