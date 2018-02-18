import express from "express";
import rp from "request-promise-native";

let router = express.Router();

const areasRouter = {
  getRegion: (req, res) => {
    if (!req.params.id) {
      return res.status(422).send({ error: "You must enter an id." });
    }
  },

  /** Supply GET logic to Express router **/
  areaRoutes: () => {
    router.get("/regions/:id", areasRouter.getRegion);
    router.get("/subregions/:id", areasRouter.getSubregion);
    router.get("/locations/:id", areasRouter.getLocation);

    return router;
  },
};

export default areasRouter;
