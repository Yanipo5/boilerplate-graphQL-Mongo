require("dotenv").config();
import express from "express";
import expressGraphQL from "express-graphql";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./graphql";
import "./utils/mongo.js";

const app = express();
const PORT = process.env.PORT || "4001";

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
