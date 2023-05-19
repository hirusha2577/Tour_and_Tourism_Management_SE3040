import express from "express";
import {
  createReview,
  deleteReview,
  updatedReview,
} from "../controllers/reviewController.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/update", updatedReview);
router.post("/delete", deleteReview);
router.post("/:tourId", verifyUser, createReview);

export default router;
