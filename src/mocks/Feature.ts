import { v4 } from "uuid";

const Feature = () => {
  return {
    id: v4(),
    name: "Feature 1",
    statuses: () => [...new Array(4)],
  };
};

export default Feature;
