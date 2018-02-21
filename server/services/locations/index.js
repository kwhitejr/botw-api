export const getRegions = (req, res) => {
  console.log("inside `getRegions`");
  res.json({
    ok: true,
    msg: "GET:/location/regions successful",
  });
};

export const getRegionWithId = (req, res) => {
  res.json({
    ok: true,
    msg: "GET:/location/regions/:id successful",
    id: "You queried: " + req.params.id,
  });
};
