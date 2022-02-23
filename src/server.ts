import mongoose from "mongoose";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import mocks from "./mocks";

(async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, mocks });
  await server.start();

  server.applyMiddleware({ app });

  app.use((req, res) => res.send("Init server succesfully"));

  const uri =
    "mongodb+srv://admin:admin@cluster0.zswww.mongodb.net/test?retryWrites=true&w=majority";
  await mongoose.connect(uri);
  console.log("MongoDB connected");

  app.listen(5000, () => console.log("Server is running on port 5000"));
})();
