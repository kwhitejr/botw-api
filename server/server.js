import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log("Example app listening at port %s", port); // eslint-disable-line
});

module.exports = server;
