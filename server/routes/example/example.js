import express from "express";
let router = express.Router();

const exampleRoutes = () => {
  router.get("/", (req, res, next) => {
    res.json({
      ok: true,
      msg: "GET successful",
    });
  });

  router.post("/", (req, res) => {
    res.json({
      ok: true,
      msg: "POST successful",
    });
  });

  return router;
};

module.exports = { exampleRoutes };
