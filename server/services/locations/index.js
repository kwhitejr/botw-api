const db = require("../../models");
const Region = db.Region;

export const getRegions = (req, res) => {
  Region.findAll()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      throw new Error(err);
    });
};

export const getRegionWithId = (req, res) => {
  res.json({
    ok: true,
    msg: "GET:/location/regions/:id successful",
    id: "You queried: " + req.params.id,
  });
};
