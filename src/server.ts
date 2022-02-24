import mongoose from "mongoose";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

(async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });

  const uri =
    "mongodb+srv://admin:admin@cluster0.zswww.mongodb.net/test?retryWrites=true&w=majority";
  await mongoose.connect(uri);
  console.log("MongoDB connected");

  app.listen(5000, () => console.log(`🚀  Server ready at PORT 5000`));
})();
