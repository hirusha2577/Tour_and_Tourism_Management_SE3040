import express from "express";
import {
  createVehicle,
  updateVehicle,
  deleteVehicle,
  getSingleVehicle,
} from "../controllers/vehicleController.js";
const router = express.Router();

import { verifyVehicleDriver } from "../utils/verifyToken.js";

router.post("/create", createVehicle);

router.delete("/:id", deleteVehicle);

router.put("/:id", updateVehicle);

router.get("/:id", getSingleVehicle);

export default router;
