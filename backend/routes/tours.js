import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updatedTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCounts,
  getAllTourHotel,
} from "../controllers/tourController.js";

import { verifyHotel } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/hotel", getAllTourHotel);

//create new tour
router.post("/", createTour);

//update tour
router.post("/update", updatedTour);

//Delete tour
router.post("/delete", deleteTour);

//get sigle tour
router.get("/:id", getSingleTour);

//get all tours
router.get("/", getAllTour);

//get tours by Search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCounts);

export default router;
