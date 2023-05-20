import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
  updatedBooking,
  deleteBooking,
  getAllpendingBookings,
  getAllOngoingBookings,
  getAllComletedBookings,
} from "../controllers/bookingController.js";

import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/pending", getAllpendingBookings);
router.get("/ongoing", getAllOngoingBookings);
router.get("/completed", getAllComletedBookings);
router.post("/", createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", getAllBooking);
router.put("/:id", updatedBooking);
router.delete("/:id", deleteBooking);

export default router;
