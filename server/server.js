import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import { exampleRoutes } from "./routes/example/example.js";
import exampleGithubRouter from "./routes/example-github/example-github.js";

const db = require("../models");

const createServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3001;

  // Setup server logger
  app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
  );

  // Allow parsing
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // CORS permissions
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    next();
  });

  app.get("/", (req, res) => {
    res.status(200).send("ok");
  });

  app.use("/example", exampleRoutes());
  app.use("/github", exampleGithubRouter.exampleGithubRoutes());

  // app.get("/*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "index.html"));
  // });

  const server = db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
      // const port = server.address().port;
      // console.log(`Example app listening at port ${port}`); // eslint-disable-line
    });
  });

  return server;
};

module.exports = { createServer };
