import express from "express";

import { exampleRoutes } from "./routes/example/example.js";
import { exampleGithubRoutes } from "./routes/example-github/example-github.js";

const createServer = () => {
  const app = express();

  app.get("/", (req, res) => {
    res.status(200).send("ok");
  });

  app.use("/example", exampleRoutes());
  app.use("/github", exampleGithubRoutes());

  const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log("Example app listening at port %s", port); // eslint-disable-line
  });

  return server;
};

module.exports = { createServer };
