import { v4 } from "uuid";
import { getRandomInt } from "./index";

const statusHeader = [
  { name: "Blocked", color: "#E53030" },
  { name: "In progress", color: "#FFA500" },
  { name: "To do", color: "#8BC48B" },
  { name: "Done", color: "#3042E5" },
];

const Status = () => {
  const { name, color } = statusHeader[getRandomInt(4)];
  return {
    id: v4(),
    name,
    color,
    tasks: () => [...new Array(10)],
  };
};

export default Status;
