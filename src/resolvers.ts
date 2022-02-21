import UserModel from "./Model/User";

const resolvers = {
  Query: {
    getUsers: async () => await UserModel.find(),
  },

  Mutation: {
    createUser: async (_: any, args: any) => {
      try {
        const newUser = await UserModel.create(args);
        return {
          code: 200,
          success: true,
          message: `Successfully create user ${args.name}`,
          data: newUser,
        };
      } catch (error) {
        return {
          code: 404,
          success: false,
          message: `Unuccessfully create user ${args.name}`,
          data: null,
        };
      }
    },
  },
};

export default resolvers;
