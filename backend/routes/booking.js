import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
  updatedBooking,
  deleteBooking,
} from "../controllers/bookingController.js";

import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", getAllBooking);
router.put("/:id", updatedBooking);
router.delete("/:id", deleteBooking);

export default router;
