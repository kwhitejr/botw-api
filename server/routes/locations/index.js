"use strict";

import express from "express";
import locationController from "../../controllers/locations";

let router = express.Router();

router.use("/", locationController);

export default router;
