import { v4 } from "uuid";
import { getRandomInt } from "./index";

const labels = [
  { name: "Design", color: "#E53030" },
  { name: "Build", color: "#FFA500" },
  { name: "Test", color: "#8BC48B" },
  { name: "Release", color: "#3042E5" },
  { name: "Operation", color: "#800000" },
];

const Phase = () => {
  const { name, color } = labels[getRandomInt(5)];
  return {
    id: v4(),
    name,
    color,
  };
};

export default Phase;
