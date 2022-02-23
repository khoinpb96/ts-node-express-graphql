import { v4 } from "uuid";
import casual from "casual";

const User = () => {
  return {
    id: v4(),
    name: casual.first_name,
    color: casual.rgb_hex,
  };
};

export default User;
