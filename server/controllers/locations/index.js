import express from "express";
import * as locationService from "../../services/locations";

console.log(locationService.getRegions);

let router = express.Router();

router.get("/regions/v1", locationService.getRegions);
router.get("/regions/v1/:id", locationService.getRegionWithId);

export default router;
