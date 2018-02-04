import express from "express";

import { exampleRoutes } from "./routes/example/example.js";
import { exampleGithubRoutes } from "./routes/example-github/example-github.js";

const createServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3001;

  app.get("/", (req, res) => {
    res.status(200).send("ok");
  });

  app.use("/example", exampleRoutes());
  app.use("/github", exampleGithubRoutes());

  const server = app.listen(PORT, () => {
    const port = server.address().port;
    console.log(`Example app listening at port ${port}`); // eslint-disable-line
  });

  return server;
};

module.exports = { createServer };
