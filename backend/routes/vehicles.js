import express from "express";
import {
  createVehicle,
  updateVehicle,
  deleteVehicle,
  getSingleVehicle,
} from "../controllers/vehicleController.js";
const router = express.Router();

import { verifyVehicleDriver } from "../utils/verifyToken.js";
router.post("/getselectedVehicle", getSingleVehicle);

router.post("/create", createVehicle);

router.delete("/:id", deleteVehicle);

router.put("/:id", updateVehicle);

export default router;
